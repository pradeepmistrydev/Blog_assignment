import React from 'react'

const Archives = (props) => {
    return (
        <>
            <div className='archives px-3'>
                <h4 className='font_playfair mt-4 fst-italic'>Archives</h4>
                <ul className='mt-3'>
                    <li>
                        <button type="button">March 2014</button>
                    </li>
                    <li>
                        <button type="button">Feb 2014</button>
                    </li>
                    <li>
                        <button type="button">Jan 2014</button>
                    </li>
                    <li>
                        <button type="button">Dec 2013</button>
                    </li>
                    <li>
                        <button type="button">Nov 2013</button>
                    </li>
                    <li>
                        <button type="button">Sept 2014</button>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default Archives
