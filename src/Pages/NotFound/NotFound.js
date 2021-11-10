import React from 'react';
import './NotFound.css';
import image from '../../images/404.svg';

const NotFound = () => {
    return (
        <div className="text-center page">
            <img className="svg" src={image} alt="" />
            <h1>Oops! Page does not found</h1>
        </div>
    );
};

export default NotFound;
