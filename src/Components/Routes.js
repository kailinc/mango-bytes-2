import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ChangePwd from './ChangePwd';
import LogOut from './LogOut';

const Routes = (props) => (
  <BrowserRouter>
    <div>
      <Header user={props.user} cart={props.cart} token={props.token}/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/cart" render={()=> <Cart cart={props.cart}/>}/>
        <Route path="/sign-up" render={()=> <SignUp handleSignUp={props.handleSignUp}/>} exact={true}/>
        <Route path="/log-in" render={()=> <SignIn handleSignIn={props.handleSignIn}/>} exact={true}/>
        <Route path="/change-pwd" render={()=> <ChangePwd handleChangePwd={props.handleChangePwd}/>} exact={true}/>
        <Route path="/log-out" render={()=> <LogOut user={props.user}/>} exact={true}/>
        <Route component={ NotFoundPage }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
