import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import MenuDisplay from './components/MenuDisplay';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import Banner from './components/Banner';
import Toggle from './Toggle';


function App() {
  return (
    <Router>
      <Header/>
      <Banner/>
      <Toggle/>
      <Switch>
        <Route path to="/" exact component={MenuDisplay}/>
        <Route path to="/cart" component={Cart}/>
        <Route path to="/product/:productId" component={ProductDetails}/>
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
