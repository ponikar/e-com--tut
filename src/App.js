import React, { useEffect } from 'react';
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
import { fetchCollectionStart } from './redux/shop-data/shop.action';



 const App = ({  checkUserSession, currentUser, fetchCollectionStart }) => {
   //WORK AS MIDDLEWARE
   useEffect(() => {
      checkUserSession();
      fetchCollectionStart();
   },[checkUserSession, fetchCollectionStart]); // same work as componentDidMouted
   const renderSignInSignUpComponent = () => currentUser ? <Redirect to="/"  /> : <SignInSignUp /> 
      return(
          <BrowserRouter>
            <Header />
            <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin"  render={() => renderSignInSignUpComponent()}  />
            <Route exact path="/checkout" component={CheckOut} />
          </Switch>
       </BrowserRouter>
        );

}



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapStateToDispatch = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(mapStateToProps, mapStateToDispatch)(App);
