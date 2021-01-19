import { Message } from "constants/types/Message";
import { TodoType } from "constants/types/TodoTypes";

export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";

export const SET_DONE = "SET_DONE";
export const SET_TODO = "SET_TODO";

export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_PENDING = "FETCH_TODOS_PENDING";
export const FETCH_TODOS_RESOLVED = "FETCH_TODOS_RESOLVED";
export const FETCH_TODOS_REJECTED = "FETCH_TODOS_REJECTED";

// -------------TODO LOCAL-------------
export interface AddTodos {
  type: typeof ADD_TODOS;
  payload: TodoType;
}

export interface DeleteTodos {
  type: typeof DELETE_TODOS;
  payload: TodoType;
}
// ------------------------------------

// ------------- SET DONE -------------
export interface SetDone {
  type: typeof SET_DONE;
  payload: TodoType;
}
// ------------------------------------
// ------------- SET TODO -------------
export interface SetTodo {
  type: typeof SET_TODO;
  payload: TodoType;
}
// ------------------------------------

// ------------ FETCH TODOS -----------
export interface FetchTodos {
  type: typeof FETCH_TODOS;
  payload: (message: string, typeMessage: Message) => void;
}

export interface FetchTodosPending {
  type: typeof FETCH_TODOS_PENDING;
}

export interface FetchTodosResolved {
  type: typeof FETCH_TODOS_RESOLVED;
  payload: TodoType[];
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
  | FetchTodosRejected
  | SetDone
  | SetTodo;
