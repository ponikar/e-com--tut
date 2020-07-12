import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import "./header.style.scss"
import { auth } from '../firebase/firebase.config'
import { connect } from 'react-redux'
const Header = ({ currentUser }) => (
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

        </div>
    </div>
)

const mapStateToProps = state => {
    return {
        currentUser:state.user.currentUser
    };
}

export default connect(mapStateToProps)(Header);