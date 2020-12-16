import { TodoTypes } from "constants/types/TodoTypes";

export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";

export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_PENDING = "FETCH_TODOS_PENDING";
export const FETCH_TODOS_RESOLVED = "FETCH_TODOS_RESOLVED";
export const FETCH_TODOS_REJECTED = "FETCH_TODOS_REJECTED";

// -------------TODO LOCAL-------------
export interface AddTodos {
  type: typeof ADD_TODOS;
  payload: TodoTypes;
}

export interface DeleteTodos {
  type: typeof DELETE_TODOS;
  payload: TodoTypes;
}
// ------------------------------------

// ------------- FETCH TODOS-----------
export interface FetchTodos {
  type: typeof FETCH_TODOS;
}

export interface FetchTodosPending {
  type: typeof FETCH_TODOS_PENDING;
}

export interface FetchTodosResolved {
  type: typeof FETCH_TODOS_RESOLVED;
  payload: TodoTypes[];
}

export interface FetchTodosRejected {
  type: typeof FETCH_TODOS_REJECTED;
  payload: string;
}
// -------------------------------------
export type TodosActionType =
  | AddTodos
  | DeleteTodos
  | FetchTodos
  | FetchTodosPending
  | FetchTodosResolved
  | FetchTodosRejected;
