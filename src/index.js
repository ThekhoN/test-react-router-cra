import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import store from './store';

import TodoPage from './component/todoPage';
import HomePage from './component/homePage';

render(
  <Provider store={ store }>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">todo</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/todo" component={TodoPage}/>
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
