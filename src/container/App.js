import React, {Component} from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import TodoPage from '../component/todoPage';
import HomePage from '../component/homePage';
import Counter from '../component/counter';
import {setCounter} from '../actions';

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/todo'>todo</Link></li>
          <li><Link to='/counter'>counter</Link></li>
        </ul>
        <hr />
        <Route exact path='/' component={HomePage} />
        <Route path='/todo' component={TodoPage} />
        <Route path='/counter' component={Counter} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchInitialCounter: (count) => {
      dispatch(setCounter(count));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
