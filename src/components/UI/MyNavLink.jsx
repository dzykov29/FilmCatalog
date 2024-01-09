import React from 'react';

const MyNavLink = ({children}) => {
    const url = `/${children.toLowerCase().trim()}`

    return (
        <a href={url}>
           {children} 
        </a>
    );
};

export default MyNavLink;