export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      // return state;
      return state.map(( todo = undefined ) => {
        if(todo.id !== action.id){
          return todo;
        }
        else {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      });

    default:
      return state;
  }
};
