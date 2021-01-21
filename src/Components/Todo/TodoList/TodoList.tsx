import React, { ReactNode } from "react";
import { StyleSheet, css } from "aphrodite";
import { TodoItem } from "components";
import { TodoType } from "constants/types";

interface TodoListProps {
  todos: TodoType[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const renderToDoList = (): ReactNode =>
    todos.map((todo, index) => <TodoItem key={index} todo={todo} />);

  return <div className={css(style.wrapper)}>{renderToDoList()}</div>;
};

const style = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
