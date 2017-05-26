import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import App from './container/App';
import {polyfill} from 'es6-promise';
import 'isomorphic-fetch';
polyfill();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
