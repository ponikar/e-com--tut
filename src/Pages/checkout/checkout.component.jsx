import React from 'react'

import "./checkout.style.scss"
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckOutItem from '../../components/check-out-item/check-out-item.component';



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
    </div>
</div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,

});


export default connect(mapStateToProps)(CheckOut);