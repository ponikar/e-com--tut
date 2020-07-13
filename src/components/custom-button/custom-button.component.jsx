import React from 'react'
import "./custom-button.style.scss"


const CustomButton = ({ children, isGoogleSign, inverted ,...otherProps  }) => (
    <button
        className={`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSign ? 'isGoogleSign' : ''} custom-button`} {...otherProps}>
        { children }
    </button>
);

export default CustomButton;