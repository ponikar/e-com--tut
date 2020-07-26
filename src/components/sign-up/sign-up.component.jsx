import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import "./sign-up.style.scss"
import { singUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignUp = ({ singUpStart }) => {
    // first set up useState 
    const [userCredentials, serCredentials] = useState({
        email:"",
        displayName:"",
        password:"",
        confirmpassword:""
    });
    // destructure the object of useState User Credentials
    const { email,displayName,password,confirmpassword} = userCredentials;

    // create own Method apart from CLASS METHOD
    const handleChange = event => {
        const { target: { name, value } } = event;
        serCredentials({...userCredentials, [name]: value });
    }
    const handleSubmit = async event => {
        event.preventDefault();
        if(confirmpassword !== password) {
            alert("Password does not match");
            return;
        }
      
            console.log("Creating user")
            singUpStart({ email, password, displayName });
    }
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit} className="sing-up-form">
                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        handleChange={handleChange}
                        value={email}
                    />
                    <FormInput
                        type="text"
                        label="Display Name"
                        name="displayName"
                        handleChange={handleChange}
                        value={displayName}
                    />
                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        handleChange={handleChange}
                        value={password}
                    />
                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="confirmpassword"
                        handleChange={handleChange}
                        value={confirmpassword}
                    />
                    <CustomButton type="submit">
                        Sign up
                    </CustomButton>
                </form>
            </div>
        )
}


const mapDispatchToProps = dispatch => ({
    singUpStart: userParams => dispatch(singUpStart(userParams)) 
})


export default connect(null, mapDispatchToProps)(SignUp);