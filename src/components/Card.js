import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className='card'>
                <div className='card_content d-flex'>
                    <div className='card_content_text'>
                        <p>{props.text}</p>
                        <h4 className='mt-2'>{props.Blog_title}</h4>
                        <p className='date'>{props.blog_date}</p>
                        <p className='description'>{props.blog_description}</p>
                        <button className='btn_link btn_size'>Continue Reading</button>
                    </div>
                    <div className='card_content_thumbnail'>
                        <p>Thumbnail</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
