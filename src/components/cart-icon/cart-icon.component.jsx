import React from 'react'
import "./cart-icon.style.scss"
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg'
import { toggleCardHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCounts } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCardHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <Icon className="shopping-icon" />
        <span className="item-count"> { itemCount } </span>
    </div>
);


const mapStateToDispatch = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});


const mapStateToProps = state => ({
    itemCount: selectCartItemsCounts(state)
})

export default connect(mapStateToProps, mapStateToDispatch)(CartIcon);