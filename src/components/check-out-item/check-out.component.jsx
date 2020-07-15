import React from 'react'

import "./check-out.style.scss"

const CheckOutItem = ({ cartItem: { imageUrl, price, quantity, name } }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img 
                src="" 
                alt="item"/>
        </div>
        <span className="name">
            {name}
        </span>
        <span className="quantity">
                {quantity}
            </span>
            <span className="price">
            {price}
            </span>
            <span className="remove">
                &#10005;
            </span>
    </div>
);

export default CheckOutItem;