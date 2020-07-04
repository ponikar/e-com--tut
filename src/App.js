import React from 'react';
import './App.css';
import { HomePage } from './Pages/home-page/home-page.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Hats = () => <div>HATS</div>

function App() {
  return(
   <BrowserRouter>
    <Switch>
    <Route exact path="/"  component={HomePage} />
    <Route  path="/hats" component={Hats} />
  </Switch>
  </BrowserRouter>);
}

export default App;
