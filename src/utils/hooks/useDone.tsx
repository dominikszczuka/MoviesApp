import { TodoType } from "constants/types/TodoTypes";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/store";
import { setDone, setTodo } from "store/todo/todoActions";

const useDone = (todo: TodoType) => {
  const dispatch = useDispatch();

  const { todos, doneTodos } = useSelector(
    (state: AppState) => state.todosReducer
  );

  const isCompleted = !!doneTodos.find((doneTodo) => doneTodo.id === todo.id);

  const toggleCompleted = () => {
    if (isCompleted) {
      dispatch(setTodo(todo));
      todo.completed = !isCompleted;
    } else {
      dispatch(setDone(todo));
      todo.completed = !isCompleted;
    }
  };

  return { isCompleted, toggleCompleted };
};

export default useDone;
