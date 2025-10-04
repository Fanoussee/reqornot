import React from 'react';
import './css/Card.css';

const Card = ({ imgSrc, imgAlt, label, disabled }) => {
    return (
        <div className={`card ${!disabled && 'card-disabled'}`}>
            <div className="card-img">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="card-label">{label}</div>
        </div>
    );
};

export default Card;
