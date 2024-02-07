import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <footer className='py-5 text-center text-body-secondary'>
                <p>
                    Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by{' '}<a href="https://twitter.com/mdo">@mdo</a>
                </p>

                <p onClick={scrollToTop} className='pt-2 backtoTop'>
                    Back To Top
                </p>

                <NavLink to="/form">
                    <button className='btn btn-primary btn_fixed'>
                        Create Post
                    </button>
                </NavLink>
            </footer>
        </>
    );
};

export default Footer;