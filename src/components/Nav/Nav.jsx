import React from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to={"/"}> 
                <img className='logo' src='./logo.png' alt='AnimeGo' />
            </NavLink>
            <ul className='nav__list'>
                <li>
                    <NavLink className='nav__link' to={"/"} end>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav__link' to={"/favorite"}>Favorite</NavLink>
                </li>
            </ul>
            
                
        </nav>
    );
};

export default Nav;