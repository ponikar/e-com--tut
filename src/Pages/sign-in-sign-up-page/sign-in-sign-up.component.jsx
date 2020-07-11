import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import "./sign-in-sing-up.style.scss"

const SignInSignUp = () => (
    <div className="sign-in-sign-up-form">
        <SignIn />
        <SignUp />
    </div>)


export default SignInSignUp;