import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Routes = (props) => (
  <BrowserRouter>
    <div>
      <Header user={props.user} cart={props.cart}/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/cart" render={()=> <Cart cart={props.cart}/>}/>
        <Route path="/sign-up" render={()=> <SignUp user={props.user} />} exact={true}/>
        <Route path="/log-in" render={()=> <SignIn user={props.user} />} exact={true}/>
        <Route component={ NotFoundPage }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
