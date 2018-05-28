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
import Profile from '../pages/Profile';
import ItemPage from '../pages/ItemPage';
import Footer from '../Components/Footer';
import Confirmation from '../pages/Confirmation';
import Superpowers from '../pages/Superpowers';
import Stickers from '../pages/Stickers';
import Swag from '../pages/Swag';
import Misc from '../pages/Misc';
import Points from '../pages/Points';
import All from '../pages/All';

class Routes extends Component {

  render() {
    return(
        <BrowserRouter>
          <div>
            <Header />
            <div className='content'>
              <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/user-profile" component={Profile} exact={true}/>
                <Route path="/checkout" render={()=> <Checkout exact={true}/>}/>
                <Route path="/sign-up" render={() => <SignUp alertSuccess={this.alertSuccess} alertError={this.alertError} />} exact={true}/>
                <Route path="/log-in" render={()=> <SignIn handleSignIn={this.props.handleSignIn}/>} exact={true}/>
                <Route path="/change-pwd" render={()=> <ChangePwd handleChangePwd={this.props.handleChangePwd}/>} exact={true}/>
                <Route path="/log-out" render={()=> <LogOut handleLogOut={this.props.handleLogOut}/>} exact={true}/>
                <Route path="/all" component={All} />
                <Route path="/superpowers" component={Superpowers} />
                <Route path="/points" component={Points} />
                <Route path="/stickers" component={Stickers} />
                <Route path="/swag" component={Swag} />
                <Route path="/misc" component={Misc} />
                <Route path="/item/:id" component={ItemPage} />
                <Route path="/confirmation" component={Confirmation} />
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
