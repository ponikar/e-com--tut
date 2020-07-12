import React from 'react'
import "./cart-icon.style.scss"
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg'
import { toggleCardHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCardHidden }) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <Icon className="shopping-icon" />
        <span className="item-count"> 0 </span>
    </div>
);


const mapStateToDispatch = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

export default connect(null, mapStateToDispatch)(CartIcon);