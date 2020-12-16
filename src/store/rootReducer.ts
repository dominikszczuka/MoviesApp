import { combineReducers } from "redux";
import todosReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;
