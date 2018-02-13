import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import Header from '../Components/Header';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ChangePwd from '../pages/ChangePwd';
import LogOut from '../pages/LogOut';
import Shop from '../pages/Shop';
import ItemPage from '../pages/ItemPage';
import Footer from '../Components/Footer';

class Routes extends Component {

  render() {
    return(
        <BrowserRouter>
          <div>
            <Header />
            <div className='content'>
              <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/checkout" render={()=> <Checkout exact={true}/>}/>
                <Route path="/sign-up" render={() => <SignUp alertSuccess={this.alertSuccess} alertError={this.alertError} />} exact={true}/>
                <Route path="/log-in" render={()=> <SignIn handleSignIn={this.props.handleSignIn}/>} exact={true}/>
                <Route path="/change-pwd" render={()=> <ChangePwd handleChangePwd={this.props.handleChangePwd}/>} exact={true}/>
                <Route path="/log-out" render={()=> <LogOut handleLogOut={this.props.handleLogOut}/>} exact={true}/>
                <Route path="/all" component={Shop} />
                <Route path="/item/:id" component={ItemPage} />
                <Route component={ NotFoundPage }/>
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    )
  }
}

export default Routes;
