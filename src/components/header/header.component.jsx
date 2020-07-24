import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import "./header.style.scss"
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, OptionLinkContainer, OptionsContainer } from './header.style'
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container'
import { signOutStart } from '../../redux/user/user.actions'
const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <OptionLinkContainer  to="/">
            <Logo />
        </OptionLinkContainer>
        <OptionsContainer>
            <OptionLinkContainer to="/shop" > Shop </OptionLinkContainer>
            <OptionLinkContainer to="/shop" > Contact </OptionLinkContainer>
            {
                currentUser ? <OptionLinkContainer as="div" onClick={() => signOutStart()}> Sign out </OptionLinkContainer> : 
                <OptionLinkContainer to="/signin"> Signin </OptionLinkContainer>
            }
        <CartIcon />
        </OptionsContainer>
         { hidden ? null : <CartDropdownContainer />  }
    </HeaderContainer>
)


// mapping this mapStateToProps with structure
//
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden

})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);