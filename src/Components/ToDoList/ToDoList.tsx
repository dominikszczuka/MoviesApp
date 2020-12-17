import React, { ReactNode } from "react";
import TodoItem from "components/TodoItem/TodoItem";

import { useSelector } from "react-redux";
import { AppState } from "store/store";

const TodoList = () => {
  const { todos } = useSelector((state: AppState) => state.todosReducer);

  const renderToDoList = (): ReactNode =>
    todos.map((todo, index) => <TodoItem key={index} todo={todo} />);

  return <>{renderToDoList()}</>;
};

export default TodoList;
