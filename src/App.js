import React from 'react';
import './App.css';
import { HomePage } from './Pages/home-page/home-page.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ShopPage from './components/shop-page/shop-page.component';

const Hats = () => <div>HATS</div>

function App() {
  return(
   <BrowserRouter>
    <Switch>
    <Route exact path="/"  component={HomePage} />
    <Route  path="/shop" component={ShopPage} />
  </Switch>
  </BrowserRouter>);
}

export default App;
