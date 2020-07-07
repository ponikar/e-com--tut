import React from 'react';
import './App.css';
import { HomePage } from './Pages/home-page/home-page.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ShopPage from './components/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUp from './Pages/sign-in-sign-up-page/sign-in-sign-up.component';
import { auth } from './components/firebase/firebase.config';

const Hats = () => <div>HATS</div>

 class App extends React.Component {
   state = {
     currentUser:null
   }
   unSubscribeFromAuth = null
   componentDidMount() {
     // Firebase auth object is used to 
     // keep track of current sign in user
       this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
          this.setState({ currentUser:user });
      });
   }
   componentWillUnmount() {
      // unsubscribe the auth of Firebase
      this.unSubscribeFromAuth();
   }
    render() {
      return(
        <BrowserRouter>
         <Header currentUser={this.state.currentUser} />
         <Switch>
         <Route exact path="/"  component={HomePage} />
         <Route  path="/shop" component={ShopPage} />
         <Route path="/signin" component={SignInSignUp} />
       </Switch>
       </BrowserRouter>);
    }
}

export default App;
