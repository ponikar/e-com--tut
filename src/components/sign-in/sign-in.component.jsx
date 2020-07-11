import React from 'react'
import FormInput from '../form-input/form-input.component';

import "./sign-in.style.scss"
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../firebase/firebase.config';

class SignIn extends React.Component {
        state = {
            email: '',
            password:''
        };
        handleSubmit = async event => {
            event.preventDefault();
            
            const { email, password } = this.state;
            
            try {
                // sign in with email and password!
                await auth.signInWithEmailAndPassword(email, password );
                this.setState({ email: "", password: "" });
            } catch(e) {
                console.log(e)
            }
        }
        handleChange = event => {
            
            const { target: {value, name } } = event;
            this.setState({ [name]: value });
        }
        render() {
           return(<div className="sign-in">
           <h2>I have already account</h2>
           <span>Sign in with your email and passoword</span>
           <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email" 
                    label="email"
                    handleChange={this.handleChange} 
                    type="email" 
                    value={this.state.email} />
                <FormInput 
                    name="password" 
                    label="password"
                    handleChange={this.handleChange} 
                    type="password" 
                    value={this.state.password}  />
                <div className="buttons">
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton  onClick={signInWithGoogle} isGoogleSign> Sign in with google </CustomButton>
                </div>
           </form>
       </div>)
        }
}

export default SignIn;