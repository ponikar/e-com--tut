import React from 'react'

import "./checkout.style.scss"
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckOutItem from '../../components/check-out-item/check-out-item.component';
import StripeCheckoutButton from '../../components/stripe-checkout-button/stiripe-checkout-button.component';



const CheckOut = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span> Product </span>
            </div>
            <div className="header-block">
            <span> Description </span>
            </div>
            <div className="header-block">
            <span> Quantity </span>
            </div>
            <div className="header-block">
            <span> Price </span>
            </div>
            <div className="header-block">
            <span> Remove </span>
            </div>
    </div>
    {
        cartItems.map(cartItem => <CheckOutItem cartItem={cartItem} key={cartItem.id} />)
    }
    <div className="total">
        <span> ${ total } </span>
        <StripeCheckoutButton price={total} />
        <div className="alert-message">
            *Use this information to make payment*
            <br />
            4242 4242 4242 4242 
            123 01/25
        </div>
    </div> 
</div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,

});


export default connect(mapStateToProps)(CheckOut);