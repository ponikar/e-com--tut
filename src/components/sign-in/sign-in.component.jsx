import React from 'react'
import FormInput from '../form-input/form-input.component';

import "./sign-in.style.scss"
import CustomButton from '../custom-button/custom-button.component';
import {auth } from '../firebase/firebase.config';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
        const [userCredentials, setCredentials] = useState({ email: "", password: "" });
        const { email, password } = userCredentials;

        
        const handleSubmit = async event => {
            event.preventDefault();
            emailSignInStart(email, password);
            try {
                // sign in with email and password!
                await auth.signInWithEmailAndPassword(email, password );
                setCredentials({ email: "", password: "" });
            } catch(e) {
                console.log(e)
            }
        }
        const handleChange = event => {
            const { target: {value, name } } = event;
            setCredentials({ ...userCredentials, [name]: value });
        }
           return(<div className="sign-in">
           <h2>I have already account</h2>
           <span>Sign in with your email and passoword</span>
           <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    label="email"
                    handleChange={handleChange} 
                    type="email" 
                    value={email} />
                <FormInput 
                    name="password" 
                    label="password"
                    handleChange={handleChange} 
                    type="password" 
                    value={password}  />
                <div className="buttons">
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton type="button"  onClick={googleSignInStart} isGoogleSign> Sign in with google </CustomButton>
                </div>
           </form>
       </div>)
}

export const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);