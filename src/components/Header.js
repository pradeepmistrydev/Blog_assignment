import React from 'react'

const Header = () => {
    return (
        <>
            <div className='container'>
                <header className='mt-3 header'>
                    <div className='d-flex align-items-center row'>
                        <div className='col-4'>
                            <button className='subscribe_text col-4'>Subscribe</button>
                        </div>
                        <div className='col-4 text-center'>
                            <h2 className='header_logo font-weight-bold '>Large</h2>
                        </div>
                        <div className='col-4'>
                            <div className='d-flex gap-3 header_signup align-items-center'>
                                <img src="images/search.png" alt="search_icon" />
                                <button className='btn btn-sm btn-outline-secondary btn_signup'>Sign up</button>
                            </div>
                        </div>
                    </div>
                    <div className='menu_list'>
                        <ul className='d-flex'>
                            <li className='active'>World</li>
                            <li>U.S.</li>
                            <li>Technology</li>
                            <li>Design</li>
                            <li>Culture</li>
                            <li>Business</li>
                            <li>Politics</li>
                            <li>Opinion</li>
                            <li>Health</li>
                            <li>Style</li>
                            <li>Travel</li>
                        </ul>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header
