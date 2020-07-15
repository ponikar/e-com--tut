import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import "./header.style.scss"
import { auth } from '../firebase/firebase.config'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link to="/shop" className="option"> Shop </Link>
            <Link to="/shop" className="option"> Contact </Link>
            {
                currentUser ? <div onClick={() => auth.signOut()} className="option"> Sign out </div> : <Link to="/signin" className="option"> Signin </Link>
            }
        <CartIcon />
        </div>
         { hidden ? null : <CartDropDown />  }
    </div>
)


// mapping this mapStateToProps with structure
//
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden

})

export default connect(mapStateToProps)(Header);