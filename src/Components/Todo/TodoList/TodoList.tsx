import React, { ReactNode } from "react";
import { StyleSheet, css } from "aphrodite";
import TodoItem from "components/Todo/TodoItem/TodoItem";
import { TodoType } from "constants/types/TodoTypes";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
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
export default TodoList;
