import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import Routes from './Components/Routes'
import configureStore from './store/configureStore';

const store = configureStore()

store.subscribe(() =>
  console.log(store.getState())
)

class Root extends Component  {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('root'));
