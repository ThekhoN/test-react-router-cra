import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Nav from '../component/nav';
// import HomePage from '../component/homePage';
// import TodoPage from '../component/todoPage';

export default() => (
  <Router>
    <Nav/>
  </Router>
);
