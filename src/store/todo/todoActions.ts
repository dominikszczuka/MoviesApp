import { TodoTypes } from "constants/types/TodoTypes";
import * as todosTypes from "./todoTypes";

export const addTodos = (todo: TodoTypes): todosTypes.AddTodos => ({
  type: todosTypes.ADD_TODOS,
  payload: todo,
});
