import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ChangePwd from './ChangePwd';
import LogOut from './LogOut';


class Routes extends Component {

  render() {
    return(
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact={true}/>
              <Route path="/cart" render={()=> <Cart cart={this.props.cart}/>} exact={true}/>
              <Route path="/sign-up" render={() => <SignUp alertSuccess={this.alertSuccess} alertError={this.alertError} />} exact={true}/>
              <Route path="/log-in" render={()=> <SignIn handleSignIn={this.props.handleSignIn}/>} exact={true}/>
              <Route path="/change-pwd" render={()=> <ChangePwd handleChangePwd={this.props.handleChangePwd}/>} exact={true}/>
              <Route path="/log-out" render={()=> <LogOut handleLogOut={this.props.handleLogOut}/>} exact={true}/>
              <Route component={ NotFoundPage }/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default Routes;
