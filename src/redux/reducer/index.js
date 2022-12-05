import { combineReducer } from 'redux';
import todoListReducer from './todoList';

const rootReducer = combineReducer({
    todoList: todoListReducer,
});

export default rootReducer;

