import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux';

import Routes from './Components/Routes'
import configureStore from './store/configureStore';

// optional cofiguration
// const options = {
//   position: 'bottom center',
//   timeout: 5000,
//   offset: '30',
//   transition: 'scale'
// }

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

{/* <AlertProvider template={AlertTemplate} {...options}>
  <Routes />
</AlertProvider> */}

render(<Root />, document.getElementById('root'));
