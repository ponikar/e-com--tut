
import CartDropdown from './cart-dropdown.component'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

const CartDropdownContainer = compose(
    connect(mapStateToProps),
    withRouter
)(CartDropdown);

export default CartDropdownContainer;