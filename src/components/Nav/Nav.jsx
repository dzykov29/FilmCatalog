import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <nav>
                <Link className='nav__link' to={"/"}>Home</Link>
                <Link className='nav__link' to={"/favorite"}>Favorite</Link>
            </nav>
        </nav>
    );
};

export default Nav;