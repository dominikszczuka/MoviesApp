import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, css } from "aphrodite";

import TodoItem from "components/TodoItem/TodoItem";
import { AppState } from "store/store";

const TodoList = () => {
  const { todos } = useSelector((state: AppState) => state.todosReducer);

  const renderToDoList = (): ReactNode =>
    todos.map((todo, index) => <TodoItem key={index} todo={todo} />);

  return <div className={css(style.wrapper)}>{renderToDoList()}</div>;
};

const style = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TodoList;
