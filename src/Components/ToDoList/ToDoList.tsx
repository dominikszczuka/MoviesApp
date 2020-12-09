import React, { ReactNode } from "react";

import TodoItem from "components/TodoItem/TodoItem";

import { TodoTypes } from "constants/types/TodoTypes";

const TodoList = () => {
  const listItems: TodoTypes[] = [
    {
      id: 0,
      title: "Task 1",
      desc: "Lorem ipsum set dolores",
      dateStart: new Date(),
    },
    {
      id: 1,
      title: "Task 2",
      desc: "Lorem ipsum set dolores uno dos tres",
      dateStart: new Date(),
    },
    {
      id: 2,
      title: "Task 3",
      desc: "Hello World",
      dateStart: new Date(),
    },
  ];

  const renderToDoList = (): ReactNode =>
    listItems.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <>{renderToDoList()}</>;
};

export default TodoList;
