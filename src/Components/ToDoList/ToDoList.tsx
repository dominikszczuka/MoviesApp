import React, { ReactNode, useEffect } from "react";
import TodoItem from "components/TodoItem/TodoItem";

import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/store";
import { fetchTodos } from "store/todo/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: AppState) => state.todosReducer);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const renderToDoList = (): ReactNode =>
    todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <>{renderToDoList()}</>;
};

export default TodoList;
