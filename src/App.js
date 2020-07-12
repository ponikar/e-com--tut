import React from 'react';
import './App.css';
import { HomePage } from './Pages/home-page/home-page.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ShopPage from './components/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUp from './Pages/sign-in-sign-up-page/sign-in-sign-up.component';
import { auth, makeUserRegisterDocument } from './components/firebase/firebase.config';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';


 class App extends React.Component {
 
   unSubscribeFromAuth = null
   componentDidMount() {
     // Firebase auth object is used to 
     // keep track of current sign in user
       this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
          if(userAuth) {
            const { uid  } = userAuth;
            const { setCurrentUser } = this.props;
             const userRef = await makeUserRegisterDocument(userAuth);
             // store data to snapshot 
             userRef.onSnapshot(snapshot => {
                setCurrentUser({
                  currentUser:{
                      uid,
                      ...snapshot.data()
                  }
                });
              });
          } else {
            setCurrentUser({ currentUser: null })
          }
      });
   }
   componentWillUnmount() {
      // unsubscribe the auth of Firebase
      this.unSubscribeFromAuth();
   }
    render() {
      return(
          <BrowserRouter>
            <Header />
            <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route  path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInSignUp} />
          </Switch>
       </BrowserRouter>
        );
    }
}

// mentioning all the actions creator here
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
