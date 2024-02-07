import React from 'react'
import Card from './Card'

const Cards = (props) => {
    // console.log(props, "1111")
    return (
        <>
            <div className='container cards d-flex flex-wrap my-4'>
                {props.blogs.map(blog => <Card text={blog.category} Blog_title={blog.title} blog_date={blog.date} blog_description={blog.description} />)}
                <Card text='World' Blog_title='Featured Post' blog_date='Nov 12' blog_description="That is when you turn to Lorem Ipsum." />
                <Card text='Design' Blog_title='Post Title' blog_date='Nov 11' blog_description="Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more." />

            </div>
        </>
    )
}

export default Cards
