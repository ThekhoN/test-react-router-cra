import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/addtodo';

class TodoPageComponent extends Component{
  render(){
    const { todos } = this.props;
    return (
      <div>
          <h2>Todo</h2>
          <AddTodo/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

const TodoPage = connect( mapStateToProps, null )( TodoPageComponent );

export default TodoPage;

/****************************************/
  //  Components //
/***************************************/
