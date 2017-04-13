import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';

const NavComponent = () => (
  <div>
    <h2>
      Nav Component
    </h2>
    <ul>
      <li>
        <Link to='home'>home</Link>
      </li>
      <li>
        <Link to='todo'>todos</Link>
      </li>
    </ul>
  </div>

)

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const Nav = connect( mapStateToProps, null )(NavComponent);

export default Nav;
