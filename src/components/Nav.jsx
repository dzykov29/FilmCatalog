import React from 'react';
import MyNavLink from './UI/MyNavLink';
import '../styles/nav.css'

const Nav = ({nav}) => {
    return (
        <nav className='nav'>
            {nav.map((item, index) => 
                <MyNavLink key={index}>{item}</MyNavLink>
            )}
        </nav>
    );
};

export default Nav;