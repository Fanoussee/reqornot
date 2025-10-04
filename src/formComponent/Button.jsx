import React from 'react';
import './css/Button.css';

const Button = ({onClick, shortLabel,  longLabel}) => {
    return (
        <div
            className="button-select"
            onClick={onClick}
        >
            <div>{shortLabel}</div>
            <div>{longLabel}</div>
        </div>
    );
};

export default Button;
