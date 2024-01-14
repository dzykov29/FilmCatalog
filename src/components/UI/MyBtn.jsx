import React from 'react';
import '../../styles/MyBtn.css'

const MyBtn = ({children, url}) => {
    return (
        <button className='btn'>
            <a href={url}>{children}</a>
        </button>
    );
};

export default MyBtn;