import { Category, Priority, TodoType } from "constants/types";

export const addTodosLocalStorage = (
  todos: TodoType[],
  todosDone: TodoType[]
) => {
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("todosDone", JSON.stringify(todosDone));
};

export const deleteTodosLocalStorage = () => localStorage.clear();

export const checkIfDateExists = () => {
  if (localStorage.getItem("todos") && localStorage.getItem("todosDone")) {
    let todos: TodoType[] = JSON.parse(localStorage.getItem("todos") || "{}");
    let todosDone: TodoType[] = JSON.parse(
      localStorage.getItem("todosDone") || "{}"
    );
    const allTodos = { todos, todosDone };
    return allTodos;
  } else {
    return;
  }
};
