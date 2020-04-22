import React from "react";
import {Route, Switch , Link} from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Category from "./Category";
import Products from "./Products";
import Admin from './Admin';

function App() {
  return (
    <div>
    <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/admin">Admin area</Link></li>
          </ul>
       </nav>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/category" component={Category}/>
       <Route path="/products" component={Products}/>
       <Route path="/admin" component={Admin}/>
    </Switch>
    
  </div>
  );
}

export default App;
