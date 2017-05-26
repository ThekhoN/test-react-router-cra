import counter from './counter';
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  counter
});

export default rootReducer;
