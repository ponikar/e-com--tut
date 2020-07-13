import React from 'react'

import "./cart-item.style.scss";



const CartItem = ({ item : { imageUrl, price, quantity, name }}) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name}/>
        <div className="item-details">
            <span className="name">
                { name }
            </span>
            <div className="price">
               { quantity } *  { price }
            </div>
        </div>
    </div>
)

export default CartItem;