/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { CustomButton, Icon } from "components";
import useDone from "utils/hooks/useDone";
import { TodoType, Priority, Category } from "constants/types";
import { Icons } from "constants/enums/Icons";
import { useTranslation } from "react-i18next";
import { css, StyleSheet } from "aphrodite";
import { typography, palette, lightShadow } from "styles";

export interface TodoItemProps {
  todo: TodoType;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { t } = useTranslation();
  const { isCompleted, toggleCompleted } = useDone(todo);
  const label = !isCompleted ? `${t("done")}` : `${t("todo")}`;

  const taskBorderColor = (priority: Priority) => {
    switch (priority) {
      case "low":
        return styles.lowBorder;
      case "medium":
        return styles.mediumBorder;
      case "high":
        return styles.highBorder;
    }
  };

  const taskIcon = (category: Category) => {
    switch (category) {
      case "lifestyle":
        return Icons.faRunning;
      case "work":
        return Icons.faBriefcase;
      case "house":
        return Icons.faHome;
      case "car":
        return Icons.faCar;
      case "children":
        return Icons.faChild;
    }
  };

  return (
    <div
      className={css(
        styles.taskWrapp,
        todo.completed && styles.finishTask,
        taskBorderColor(todo.priority)
      )}
    >
      <div className={css(styles.taskHeader)}>
        <p className={css(typography.bigFont, styles.taskTitle)}>
          {todo.title}
        </p>
        <Icon
          iconName={taskIcon(todo.category)}
          iconSize="2x"
          color={palette.blue}
        />
      </div>
      <p className={css(typography.normalFont, styles.taskDescription)}>
        {t("task.description")}:
      </p>
      <p className={css(typography.normalFont, styles.taskDescriptionText)}>
        {todo.description}
      </p>
      <CustomButton
        type="button"
        label={label}
        onClick={toggleCompleted}
        customStyles={styles.btnDone}
        icon={{
          iconName: Icons.faCheck,
        }}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  taskWrapp: {
    display: "flex",
    flexDirection: "column",
    minHeight: "150px",
    width: "700px",
    margin: "10px 10px",
    padding: "10px 10px",
    backgroundColor: `${palette.lightGray}`,
    borderLeft: `10px solid`,
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
    width: "90px",
    margin: "5px 0px",
    backgroundColor: `${palette.blue}`,
    border: `2px solid ${palette.white}`,
    color: `${palette.white}`,
    alignItems: "center",
  },
  finishTask: {
    opacity: 0.5,
  },
  lowBorder: {
    borderColor: `${palette.success}`,
  },
  mediumBorder: {
    borderColor: `${palette.orange}`,
  },
  highBorder: {
    borderColor: `${palette.danger}`,
  },
});
