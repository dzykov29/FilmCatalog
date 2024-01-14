import React from 'react';

const MyNavLink = ({children}) => {
    let url = `/${children.toLowerCase().trim()}`

    if (children === 'Home') {
        url = '/'
    }

    return (
        <a 
        className='nav__link' 
        href={url}
        >
           {children} 
        </a>
    );
};

export default MyNavLink;