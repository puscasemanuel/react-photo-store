import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
