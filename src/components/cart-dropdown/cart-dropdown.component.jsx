import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import "./cart-dropdown.style.scss"
import CartItem from '../cart-item/cart-item.component';
import { toggleCardHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.length > 0 ?
                cartItems.map(item =>
                        <CartItem key={item.id} item={item} />
                )
                : <div className="empty-message">
                    Your cart is empty!
                </div>
            } 
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCardHidden())
        } }>
            Check Out
        </CustomButton>
    </div>
)



export default CartDropDown;