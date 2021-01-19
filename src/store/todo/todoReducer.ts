import { TodoType } from "constants/types/TodoTypes";
import * as todosTypes from "./todoTypes";

interface State {
  todos: TodoType[];
  doneTodos: TodoType[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  // user:{
  //   name: "",
  //   age: 0
  // },
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
    case todosTypes.ADD_TODOS:
      return {
        ...state,
        // user: {
        //   ...state.user,
        //   age:action.payload.age
        // }
        todos: [...state.todos, action.payload],
      };
    case todosTypes.DELETE_TODOS:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };
    case todosTypes.SET_DONE:
      return {
        ...state,
        doneTodos: [...state.doneTodos, action.payload],
      };
    case todosTypes.SET_TODO:
      return {
        ...state,
        doneTodos: [
          ...state.doneTodos.filter((todo) => todo.id !== action.payload.id),
        ],
      };
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
