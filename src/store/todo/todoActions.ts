import { TodoTypes } from "constants/types/TodoTypes";
import * as todosTypes from "./todoTypes";

export const addTodos = (todo: TodoTypes): todosTypes.AddTodos => ({
  type: todosTypes.ADD_TODOS,
  payload: todo,
});

export const deleteTodos = (todo: TodoTypes): todosTypes.DeleteTodos => ({
  type: todosTypes.DELETE_TODOS,
  payload: todo,
});

export const fetchTodos = (): todosTypes.FetchTodos => ({
  type: todosTypes.FETCH_TODOS,
});

export const fetchTodosPending = (): todosTypes.FetchTodosPending => ({
  type: todosTypes.FETCH_TODOS_PENDING,
});

export const fetchTodosResolved = (
  todos: TodoTypes[]
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
