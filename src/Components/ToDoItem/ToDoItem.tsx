import React from "react";
import { default as toDoItemStyles } from "./ToDoItem.module.scss";
import bemCssModule from "bem-css-modules";
import { ToDo } from "constants/types/ToDo";
import { useTranslation } from "react-i18next";

const style = bemCssModule(toDoItemStyles);

export interface ToDoItemProps {
  todo: ToDo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo }: ToDoItemProps) => {
  const { t } = useTranslation();

  return (
    <div className={style()}>
      <p className={style("title")}>
        {t("task.title")}: {todo.title}
      </p>
      <p className={style("desc")}>
        {t("task.description")}: {todo.desc}
      </p>
      <p className={style("date")}>
        {t("task.date-start")}: {todo.dateStart.toISOString()}
      </p>
    </div>
  );
};

export default ToDoItem;
