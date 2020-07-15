import React from 'react'

import "./check-out.style.scss"
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { imageUrl, price, quantity, name } = cartItem;
    return(
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
                <div className="arrow"
                onClick={() => removeItem(cartItem)}
                >
                    &#10094;
                </div>
                    <span className="value">
                    {quantity}
                    </span>
                <div className="arrow" onClick={() => addItem(cartItem)}
                >
                &#10095; left
                </div>
                </span>
                <span className="price">
                {price}
                </span>
                <span className="remove" 
                onClick={() => clearItem(cartItem)}>
                    &#10005;
                </span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);