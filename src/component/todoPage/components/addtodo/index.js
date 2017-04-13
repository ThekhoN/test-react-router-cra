import React from 'react';
import { connect } from 'react-redux';
import Link from '../link'

let nextTodoId = 1;
const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t=>!t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(t=>t.completed)
    default:
      return todos;
  }
}

let AddTodo = ({handle_addTodo, handle_onClickTodo, todos, visibilityFilter}) => {
  let input;
  const visibleTodos = getVisibleTodos(todos, visibilityFilter);
  return (<div>
      <h2>Todo App</h2>
      <input ref={node=>{input=node}}/>
      <button
        onClick={()=>{
          const text = input.value;
          const id = nextTodoId++;
          handle_addTodo(id, text);
        }}>Add Todo</button>
      <ul>
      {visibleTodos.map(t=>(<li
                       style={{
              textDecoration: t.completed? 'line-through':'none'
            }}
                       onClick={()=>{
              const id = t.id;
              handle_onClickTodo(id);
            }}
                       key={t.id}>
            {t.text}</li>))}
      </ul>
      <p>
        SHOW:
        {` `}
        <Link filter="SHOW_ALL">All</Link>
        {` `}
        <Link filter="SHOW_ACTIVE">Active</Link>
        {` `}
        <Link filter="SHOW_COMPLETED">Completed</Link>
      </p>
    </div>)
}

const mapStateToProps_TodoApp = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}
const mapDispatchToProps_TodoApp = (dispatch) => {
  return {
    handle_addTodo:(id, text)=>{
      dispatch({
        type:'ADD_TODO',
        text,
        id
      })
    },
    handle_onClickTodo:(id)=> {
      dispatch({
        type:'TOGGLE_TODO',
        id
      })
    }
  }
}

AddTodo = connect(
  mapStateToProps_TodoApp,
  mapDispatchToProps_TodoApp
)(AddTodo);

export default AddTodo;
