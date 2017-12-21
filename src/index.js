import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Store from './Components/Store';

ReactDOM.render(<Store />, document.getElementById('root'));
registerServiceWorker();
