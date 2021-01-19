import { Message } from "constants/types/Message";
import { TodoType } from "constants/types/TodoTypes";
import * as todosTypes from "./todoTypes";

// --------------- ADD TODO -----------

export const addTodo = (
  todo: TodoType,
  callback: (message: string, typeMessage: Message) => void
): todosTypes.AddTodo => ({
  type: todosTypes.ADD_TODO,
  payload: {
    todo: todo,
    callback: callback,
  },
});

export const addTodoPending = (): todosTypes.AddTodoPending => ({
  type: todosTypes.ADD_TODOS_PENDING,
});

export const addTodoResolved = (
  todos: TodoType[]
): todosTypes.AddTodoResolved => ({
  type: todosTypes.ADD_TODOS_RESOLVED,
  payload: todos,
});

export const addTodoRejected = (
  errorMessage: string
): todosTypes.AddTodoRejected => ({
  type: todosTypes.ADD_TODOS_REJECTED,
  payload: errorMessage,
});
// ------------------------------------
// ------------- DELETE TODO-----------
export const deleteTodo = (
  todosId: number[],
  callback: (message: string, typeMessage: Message) => void
): todosTypes.DeleteTodo => ({
  type: todosTypes.DELETE_TODO,
  payload: {
    todosId: todosId,
    callback: callback,
  },
});

export const deleteTodoPending = (): todosTypes.DeleteTodoPending => ({
  type: todosTypes.DELETE_TODO_PENDING,
});

export const deleteTodoResolved = (
  todos: TodoType[]
): todosTypes.DeleteTodoResolved => ({
  type: todosTypes.DELETE_TODO_RESOLVED,
  payload: todos,
});

export const deleteTodoRejected = (
  errorMessage: string
): todosTypes.DeleteTodoRejected => ({
  type: todosTypes.DELETE_TODO_REJECTED,
  payload: errorMessage,
});
// ------------------------------------

// ------------- UPDATE TODO-----------
export const updateTodo = (
  todo: TodoType,
  callback: (message: string, typeMessage: Message) => void
): todosTypes.UpdateTodo => ({
  type: todosTypes.UPDATE_TODO,
  payload: {
    todo: todo,
    callback: callback,
  },
});

export const updateTodoPending = (): todosTypes.UpdateTodoPending => ({
  type: todosTypes.UPDATE_TODO_PENDING,
});

export const UpdateTodoResolved = (
  todo: TodoType[]
): todosTypes.UpdateTodoResolved => ({
  type: todosTypes.UPDATE_TODO_RESOLVED,
  payload: todo,
});

export const updateTodoRejected = (errorMessage: string) => ({
  type: todosTypes.UPDATE_TODO_REJECTED,
  payload: errorMessage,
});
// ------------------------------------

// ------------- FETCH TODOS-----------
export const setTodo = (todo: TodoType): todosTypes.SetTodo => ({
  type: todosTypes.SET_TODO,
  payload: todo,
});

export const setDone = (todo: TodoType): todosTypes.SetDone => ({
  type: todosTypes.SET_DONE,
  payload: todo,
});

export const fetchTodos = (
  callback: (message: string, typeMessage: Message) => void
): todosTypes.FetchTodos => ({
  type: todosTypes.FETCH_TODOS,
  payload: callback,
});

export const fetchTodosPending = (): todosTypes.FetchTodosPending => ({
  type: todosTypes.FETCH_TODOS_PENDING,
});

export const fetchTodosResolved = (
  todos: TodoType[]
): todosTypes.FetchTodosResolved => ({
  type: todosTypes.FETCH_TODOS_RESOLVED,
  payload: todos,
});

export const fetchTodosRejected = (
  errorMessage: string
): todosTypes.FetchTodosRejected => ({
  type: todosTypes.FETCH_TODOS_REJECTED,
  payload: errorMessage,
});
