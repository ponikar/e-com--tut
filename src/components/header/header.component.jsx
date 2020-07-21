import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import "./header.style.scss"
import { auth } from '../firebase/firebase.config'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, OptionLinkContainer, OptionsContainer } from './header.style'
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <OptionLinkContainer  to="/">
            <Logo />
        </OptionLinkContainer>
        <OptionsContainer>
            <OptionLinkContainer to="/shop" > Shop </OptionLinkContainer>
            <OptionLinkContainer to="/shop" > Contact </OptionLinkContainer>
            {
                currentUser ? <OptionLinkContainer as="div" onClick={() => auth.signOut()}> Sign out </OptionLinkContainer> : 
                <OptionLinkContainer to="/signin"> Signin </OptionLinkContainer>
            }
        <CartIcon />
        </OptionsContainer>
         { hidden ? null : <CartDropDown />  }
    </HeaderContainer>
)


// mapping this mapStateToProps with structure
//
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden

})

export default connect(mapStateToProps)(Header);