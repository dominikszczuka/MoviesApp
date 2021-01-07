import { TodoType } from "constants/types/TodoTypes";
import * as todosTypes from "./todoTypes";

interface State {
  todos: TodoType[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  todos: [],
  loading: false,
  error: null,
};

export default function todosReducer(
  state = initialState,
  action: todosTypes.TodosActionType
) {
  switch (action.type) {
    // --------------- ADD TODOS -----------
    case todosTypes.ADD_TODOS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case todosTypes.ADD_TODOS_RESOLVED:
      return {
        ...state,
        todos: [...action.payload],
        loading: false,
      };
    case todosTypes.ADD_TODOS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    // -------------------------------------

    // ------------- DELETE TODOS ----------
    case todosTypes.DELETE_TODO_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case todosTypes.DELETE_TODO_RESOLVED:
      return {
        ...state,
        todos: [...action.payload],
        loading: false,
      };
    case todosTypes.DELETE_TODO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // -------------------------------------

    // ------------- UPDATE TODOS-----------
    case todosTypes.UPDATE_TODO_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case todosTypes.UPDATE_TODO_RESOLVED:
      return {
        ...state,
        todos: [...action.payload],
        loading: false,
      };
    case todosTypes.UPDATE_TODO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // ------------- FETCH  TODOS-----------
    case todosTypes.FETCH_TODOS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case todosTypes.FETCH_TODOS_RESOLVED:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
        loading: false,
      };
    case todosTypes.FETCH_TODOS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
