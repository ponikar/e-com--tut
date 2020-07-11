import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, makeUserRegisterDocument } from '../firebase/firebase.config';

import "./sign-up.style.scss"

class SignUp extends React.Component {

    state = {
        email:"",
        displayName:"",
        password:"",
        confirmpassword:""
    };

    handleChange = event => {
        
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password, confirmpassword, displayName } = this.state;

        if(confirmpassword !== password) {
            alert("Password does not match");
            return;
        }
        try {
            console.log("Creating user")
            // sign in user via simple email and password
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // submit data to firestore
            await makeUserRegisterDocument(user, { displayName });

            // after user has been registered clear the form
            this.setState({ 
                email:"",
                password:"",
                confirmpassword:"",
                displayName:""
            });
        } catch(e) {
            console.error(e)    
        }
    }
    render() {
        const { email, displayName, password, confirmpassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sing-up-form">
                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        handleChange={this.handleChange}
                        value={email}
                    />
                    <FormInput
                        type="text"
                        label="Display Name"
                        name="displayName"
                        handleChange={this.handleChange}
                        value={displayName}
                    />
                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        handleChange={this.handleChange}
                        value={password}
                    />
                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="confirmpassword"
                        handleChange={this.handleChange}
                        value={confirmpassword}
                    />
                    <CustomButton type="submit">
                        Sign up
                    </CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp