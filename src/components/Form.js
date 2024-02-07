import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [categoryError, setCategoryError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;

        if (category.trim() === '') {
            setCategoryError('Category Name is required');
            isValid = false;
        } else {
            setCategoryError('');
        }

        if (title.trim() === '') {
            setTitleError('Title is required');
            isValid = false;
        } else {
            setTitleError('');
        }

        if (description.trim() === '') {
            setDescriptionError('Description is required');
            isValid = false;
        } else {
            setDescriptionError('');
        }

        return isValid;
    };

    const formatDate = (dateString) => {
        // Parse the input date string (assuming it's in the format MM/DD/YYYY)
        const [month, day, year] = dateString.split('/');
        const parsedDate = new Date(`${year}-${month}-${day}`);

        // Format the date
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = parsedDate.toLocaleDateString('en-US', options);

        return formattedDate;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        let formattedDate = currentDate.toLocaleDateString();
        // const dateToFormat = '2/7/2024';
        formattedDate = formatDate(formattedDate);
        // console.log(formattedDate);

        let data = { category, title, description, date: formattedDate };


        props.onFormSubmitHandler(data)

        if (validateForm()) {
            alert('Form Submitted', { category, title, description });
            navigate('/');
        } else {
            alert('Error Please fix it');
        }
    };

    return (
        <>
            <div className='container'>
                <div className='box_shadow'>
                    <h3 className='pb-4 d-flex mb-4 mt-1 border-bottom fst-italic'>
                        <img src="images/web.png" className='me-3 blog_icon' alt="blog_icon" />
                        Create a Blog
                    </h3>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='form-input mb-3'>
                            <label className='pb-2'>Category Name</label>
                            <input
                                type="text"
                                placeholder='Enter Category Name'
                                className={`category form-control ${categoryError && 'is-invalid'}`}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            {categoryError && <div className="invalid-feedback">{categoryError}</div>}
                        </div>
                        <div className='form-input mb-3'>
                            <label className='pb-2'>Title</label>
                            <input
                                type="text"
                                placeholder='Enter Title'
                                className={`blog_title form-control ${titleError && 'is-invalid'}`}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {titleError && <div className="invalid-feedback">{titleError}</div>}
                        </div>
                        <div className='form-input mb-3'>
                            <label className='pb-2'>Description</label>
                            <textarea
                                rows={5}
                                placeholder="Enter Description"
                                className={`blog_description form-control ${descriptionError && 'is-invalid'}`}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
                        </div>
                        <input type="submit" className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;