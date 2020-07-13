import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import "./cart-dropdown.style.scss"
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item =>
                        <CartItem key={item.id} item={item} />)
            }
        </div>
        <CustomButton>
            Check Out
        </CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems:cartItems
})

export default connect(mapStateToProps)(CartDropDown);