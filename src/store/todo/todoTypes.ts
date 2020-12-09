import { TodoTypes } from "constants/types/TodoTypes";

export const ADD_TODOS = "ADD_TODOS";

export interface AddTodos {
  type: typeof ADD_TODOS;
  payload: TodoTypes;
}

export type TodosActionType = AddTodos;
