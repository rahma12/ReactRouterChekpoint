import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import App from './App';
import Admin from './Admin'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route path="/category" component={Category}/>
    <Route path="/products" component={Products}/>
    <Route path="/admin" component={Admin}/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
