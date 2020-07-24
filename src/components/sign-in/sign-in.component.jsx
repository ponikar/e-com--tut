import React from 'react'
import FormInput from '../form-input/form-input.component';

import "./sign-in.style.scss"
import CustomButton from '../custom-button/custom-button.component';
import {auth } from '../firebase/firebase.config';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignIn extends React.Component {
        state = {
            email: '',
            password:''
        };
        handleSubmit = async event => {
            event.preventDefault();
            const { emailSignInStart } = this.props;
            const { email, password } = this.state;
            emailSignInStart(email, password);
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
           const { googleSignInStart } = this.props;
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
                <CustomButton type="button"  onClick={googleSignInStart} isGoogleSign> Sign in with google </CustomButton>
                </div>
           </form>
       </div>)
        }
}

export const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);