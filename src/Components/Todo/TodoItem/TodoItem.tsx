/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { TodoType } from "constants/types/TodoTypes";
import { css, StyleSheet } from "aphrodite";
import { typography, palette, lightShadow } from "styles/index";
import Icon from "components/Icon/Icon";
import { Icons } from "constants/enums/Icons";
import { useTranslation } from "react-i18next";
import CustomButton from "components/CustomButton/CustomButton";
import useDone from "utils/hooks/useDone";

export interface TodoItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { t } = useTranslation();
  const { isCompleted, toggleCompleted } = useDone(todo);
  const label = !todo.completed ? `${t("done")}` : `${t("todo")}`;
  return (
    <div
      onClick={() => {
        console.log(todo);
      }}
      className={css(styles.taskWrapp, todo.completed && styles.finishTask)}
    >
      <div className={css(styles.taskHeader)}>
        <p className={css(typography.bigFont, styles.taskTitle)}>
          {todo.title}
        </p>
        <Icon
          iconName={Icons.faGraduationCap}
          iconSize="2x"
          color={palette.blue}
        />
      </div>
      <p className={css(typography.normalFont, styles.taskDescription)}>
        {t("task.description")}:
      </p>
      <p className={css(typography.normalFont, styles.taskDescriptionText)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        aliquam accusamus enim quae iure blanditiis labore quisquam inventore
        reiciendis voluptate. Numquam vero consequuntur saepe nihil.
      </p>
      <CustomButton
        type="button"
        label={label}
        onClick={toggleCompleted}
        customStyles={styles.btnDone}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  taskWrapp: {
    display: "flex",
    flexDirection: "column",
    minHeight: "150px",
    margin: "10px 10px",
    padding: "10px 10px",
    backgroundColor: `${palette.lightGray}`,
    borderLeft: `10px solid ${palette.success}`,
    boxShadow: `${lightShadow}`,
  },
  taskHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  taskTitle: {
    textTransform: "uppercase",
    margin: "2px 0px",
  },
  taskDescription: {
    textTransform: "uppercase",
    margin: "5px 0px",
  },
  taskDescriptionText: {
    textAlign: "justify",
  },
  btnDone: {
    width: "70px",
    margin: "5px 0px",
    backgroundColor: `${palette.blue}`,
    border: `2px solid ${palette.white}`,
    color: `${palette.white}`,
    ":focus": {
      outline: "none",
    },
  },
  finishTask: {
    opacity: 0.5,
  },
});

export default TodoItem;
