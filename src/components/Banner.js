import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='container'>
                <div className='banner_content'>
                    <div className='d-flex'>
                        <h2>Title of a longer<br />  featured blog post</h2>
                    </div>
                    <p className='my-3'>Multiple lines of text that form the lede, informing new <br />readers quickly and efficiently about what’s most interesting<br /> in this post’s contents.</p>
                    <button className='btn_transparent'>Continue reading...</button>
                </div>
            </div>

        </>
    )
}

export default Banner
