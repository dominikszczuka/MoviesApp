import React from "react";
import { default as toDoItemStyles } from "./ToDoItem.module.scss";
import bemCssModule from "bem-css-modules";
import { ToDo } from "constants/types/ToDo";

const style = bemCssModule(toDoItemStyles);

export interface ToDoItemProps {
  todo: ToDo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo }: ToDoItemProps) => {
  return (
    <div className={style()}>
      <p className={style("title")}>Title: {todo.title}</p>
      <p>Description: {todo.desc}</p>
    </div>
  );
};

export default ToDoItem;
