import React from 'react';
import './App.css';
import { HomePage } from './Pages/home-page/home-page.component';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ShopPage from './components/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUp from './Pages/sign-in-sign-up-page/sign-in-sign-up.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import CheckOut from './Pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';



 class App extends React.Component {
   componentDidMount() {
    const { checkUserSession  } = this.props;
    checkUserSession();
   } 
   //WORK AS MIDDLEWARE
   renderSignInSignUpComponent = () => this.props.currentUser ? <Redirect to="/"  /> : <SignInSignUp /> 
    render() {
      return(
          <BrowserRouter>
            <Header />
            <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin"  render={() => this.renderSignInSignUpComponent()}  />
            <Route exact path="/checkout" component={CheckOut} />
          </Switch>
       </BrowserRouter>
        );
    }
}



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapStateToDispatch = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapStateToDispatch)(App);
