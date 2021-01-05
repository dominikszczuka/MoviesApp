import { Message } from "constants/types/Message";
import { TodoType } from "constants/types/TodoTypes";

// -------------TODO LOCAL-------------
export const DELETE_TODOS = "DELETE_TODOS";

// -------------- ADD TODOS ------------
export const ADD_TODO = "ADD_TODO";
export const ADD_TODOS_PENDING = "ADD_TODOS_PENDING";
export const ADD_TODOS_RESOLVED = "ADD_TODOS_RESOLVED";
export const ADD_TODOS_REJECTED = "ADD_TODOS_REJECTED";

// ------------- UPDATE TODOS-----------
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_PENDING = "UPDATE_TODO_PENDING";
export const UPDATE_TODO_RESOLVED = "UPDATE_TODO_RESOLVED";
export const UPDATE_TODO_REJECTED = "UPDATE_TODO_REJECTED";

// ------------ DELETE TODOS ----------
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_PENDING = "DELETE_TODO_PENDING";
export const DELETE_TODO_RESOLVED = "DELETE_TODO_RESOLVED";
export const DELETE_TODO_REJECTED = "DELETE_TODO_REJECTED";

// ------------- FETCH TODOS-----------
export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_PENDING = "FETCH_TODOS_PENDING";
export const FETCH_TODOS_RESOLVED = "FETCH_TODOS_RESOLVED";
export const FETCH_TODOS_REJECTED = "FETCH_TODOS_REJECTED";

// -------------- ADD TODOS ------------
export interface AddTodo {
  type: typeof ADD_TODO;
  payload: {
    todo: TodoType;
    callback: (message: string, typeMessage: Message) => void;
  };
}

export interface AddTodoPending {
  type: typeof ADD_TODOS_PENDING;
}

export interface AddTodoResolved {
  type: typeof ADD_TODOS_RESOLVED;
  payload: TodoType[];
}

export interface AddTodoRejected {
  type: typeof ADD_TODOS_REJECTED;
  payload: string;
}
// -------------------------------------

// ------------- DELETE TODO-----------
export interface DeleteTodo {
  type: typeof DELETE_TODO;
  payload: {
    todosId: number[];
    callback: (message: string, typeMessage: Message) => void;
  };
}

export interface DeleteTodoPending {
  type: typeof DELETE_TODO_PENDING;
}

export interface DeleteTodoResolved {
  type: typeof DELETE_TODO_RESOLVED;
  payload: TodoType[];
}

export interface DeleteTodoRejected {
  type: typeof DELETE_TODO_REJECTED;
  payload: string;
}
// -------------------------------------

// ------------- UPDATE TODOS-----------
export interface UpdateTodo {
  type: typeof UPDATE_TODO;
  payload: {
    todo: TodoType;
    callback: (message: string, typeMessage: Message) => void;
  };
}
export interface UpdateTodoPending {
  type: typeof UPDATE_TODO_PENDING;
}
export interface UpdateTodoResolved {
  type: typeof UPDATE_TODO_RESOLVED;
  payload: TodoType[];
}
export interface UpdateTodoRejected {
  type: typeof UPDATE_TODO_REJECTED;
  payload: string;
}
// -------------------------------------

// ------------- FETCH TODOS-----------
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
  | AddTodo
  | AddTodoPending
  | AddTodoResolved
  | AddTodoRejected
  | DeleteTodo
  | DeleteTodoPending
  | DeleteTodoResolved
  | DeleteTodoRejected
  | UpdateTodo
  | UpdateTodoPending
  | UpdateTodoResolved
  | UpdateTodoRejected
  | FetchTodos
  | FetchTodosPending
  | FetchTodosResolved
  | FetchTodosRejected;
