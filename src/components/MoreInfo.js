import React from 'react'
import BlogPosts from './BlogPosts'
import Article from './Article'

const MoreInfo = () => {
    return (
        <>
            <div className='container mb-4'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h3 className='pb-4 mb-4 border-bottom fst-italic'>From the Firehose</h3>
                        <BlogPosts />
                    </div>
                    <div className='col-md-4'>
                        <div className='position_sticky'>
                            <Article />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreInfo
