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
                <Route path="/mango-bytes-2" component={Home} exact={true}/>
                <Route path="/mango-bytes-2/user-profile" component={Profile} exact={true}/>
                <Route path="/mango-bytes-2/checkout" render={()=> <Checkout exact={true}/>}/>
                <Route path="/mango-bytes-2/sign-up" render={() => <SignUp alertSuccess={this.alertSuccess} alertError={this.alertError} />} exact={true}/>
                <Route path="/mango-bytes-2/log-in" render={()=> <SignIn handleSignIn={this.props.handleSignIn}/>} exact={true}/>
                <Route path="/mango-bytes-2/change-pwd" render={()=> <ChangePwd handleChangePwd={this.props.handleChangePwd}/>} exact={true}/>
                <Route path="/mango-bytes-2/log-out" render={()=> <LogOut handleLogOut={this.props.handleLogOut}/>} exact={true}/>
                <Route path="/mango-bytes-2/all" component={All} />
                <Route path="/mango-bytes-2/superpowers" component={Superpowers} />
                <Route path="/mango-bytes-2/points" component={Points} />
                <Route path="/mango-bytes-2/stickers" component={Stickers} />
                <Route path="/mango-bytes-2/swag" component={Swag} />
                <Route path="/mango-bytes-2/misc" component={Misc} />
                <Route path="/mango-bytes-2/item/:id" component={ItemPage} />
                <Route path="/mango-bytes-2/confirmation" component={Confirmation} />
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
