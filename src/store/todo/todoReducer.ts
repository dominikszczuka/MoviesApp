import { TodoTypes } from "constants/types/TodoTypes";
import * as todosTypes from "./todoTypes";

interface State {
  todos: TodoTypes[];
}

const initialState: State = {
  todos: [],
};

export default function todosReducer(
  state = initialState,
  action: todosTypes.TodosActionType
) {
  switch (action.type) {
    case todosTypes.ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
}
