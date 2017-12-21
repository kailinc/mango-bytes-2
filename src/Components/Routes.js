import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/cart" component={Cart} exact={true}/>
        <Route component={ NotFoundPage }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
