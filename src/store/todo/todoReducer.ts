import { TodoType } from "constants/types/TodoTypes";
import * as todosTypes from "./todoTypes";

interface State {
  todos: TodoType[];
  doneTodos: TodoType[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  todos: [],
  doneTodos: [],
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
        doneTodos: [...action.payload],
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

    case todosTypes.SET_DONE:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo !== action.payload)],
        doneTodos: [...state.doneTodos, action.payload],
      };
    case todosTypes.SET_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        doneTodos: [
          ...state.doneTodos.filter((todo) => todo.id !== action.payload.id),
        ],
      };
    case todosTypes.GET_TODOS_FROM_LOCAL_STORAGE:
      return {
        ...state,
        todos: [...state.todos, ...action.payload.todos],
        doneTodos: [...state.doneTodos, ...action.payload.doneTodos],
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
        todos: [
          ...state.todos,
          ...action.payload.filter((todo) => !todo.completed),
        ],
        doneTodos: [
          ...state.doneTodos,
          ...action.payload.filter((todo) => todo.completed),
        ],
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
