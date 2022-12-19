import './App.css';
import React from 'react';
import { Link, Switch, Route, Router } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exactly component={Home} pattern='/' />
            <Route exactly component={Shop} pattern='/shop' />
            <Route exactly component={Cart} pattern='/cart' />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
