import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Routes from './Components/Routes'

// optional cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30',
  transition: 'scale'
}

class Root extends Component  {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Routes />
      </AlertProvider>
    )
  }
}

render(<Root />, document.getElementById('root'));
