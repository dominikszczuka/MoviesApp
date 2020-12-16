import React from "react";
import { default as toDoItemStyles } from "./ToDoItem.module.scss";
import bemCssModule from "bem-css-modules";
import { TodoTypes } from "constants/types/TodoTypes";
import { useTranslation } from "react-i18next";

const style = bemCssModule(toDoItemStyles);

export interface TodoItemProps {
  todo: TodoTypes;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const { t } = useTranslation();

  return (
    <div className={style()}>
      <p className={style("title")}>
        {t("task.title")}: {todo.title}
      </p>
      <p className={style("desc")}>
        {t("task.description")}: {todo.completed}
      </p>
    </div>
  );
};

export default TodoItem;
