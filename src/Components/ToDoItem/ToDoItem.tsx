/* eslint-disable no-extra-boolean-cast */
import React from "react";
import { TodoType } from "constants/types/TodoTypes";
import { css, StyleSheet } from "aphrodite";
import { typography, palette, shadow } from "styles/index";
import Icon from "components/Icon/Icon";
import { Icons } from "constants/enums/Icons";
import { useTranslation } from "react-i18next";

export interface TodoItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const { t } = useTranslation();

  return (
    <div className={css(styles.taskWrapp)}>
      <div className={css(styles.taskHeader)}>
        <p className={css(typography.bigFont, styles.taskTitle)}>
          {todo.title}
        </p>
        <Icon iconName={Icons.faGraduationCap} iconSize="2x" />
      </div>
      <p className={css(typography.normalFont, styles.taskDescription)}>
        {t("task.description")}
      </p>
      <p className={css(styles.taskDescriptionText)}>
        {todo.description
          ? todo.description
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntaliquam accusamus enim."}
        {todo.category}
        {todo.priority}
      </p>
    </div>
  );
};

const styles = StyleSheet.create({
  taskWrapp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "370px",
    height: "220px",
    margin: "10px 5px",
    padding: "6px",
    backgroundColor: `${palette.blue}`,
    border: `2px solid ${palette.darkBlue}`,
    borderRadius: "5px 5px 5px 5px",
    color: `${palette.white}`,
    boxShadow: `${shadow}`,
  },
  taskHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  taskTitle: {
    textTransform: "uppercase",
    width: "320px",
    margin: "5px 0px",
  },
  taskDescription: {
    textTransform: "uppercase",
    margin: "3px 0px",
  },
  taskDescriptionText: {
    textAlign: "justify",
  },
});

export default TodoItem;
