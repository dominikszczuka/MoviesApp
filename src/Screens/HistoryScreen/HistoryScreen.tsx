import React from "react";
import CustomButton from "components/CustomButton/CustomButton";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import { useTranslation } from "react-i18next";
import TodoList from "components/Todo/TodoList/TodoList";
import { useSelector } from "react-redux";
import { AppState } from "store/store";

const HistoryToDoScreen = () => {
  const { t } = useTranslation();
  const showMessage = () => {};
  const btnDeleteTasksAll = (
    <CustomButton label={t("delete-task")} onClick={() => showMessage()} />
  );
  const { todos } = useSelector((state: AppState) => state.todosReducer);
  const finishedTodos = todos.filter((todo) => todo.completed);
  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnDeleteTasksAll} />
      <h1>{t("history-tasks")}</h1>
      <TodoList todos={finishedTodos} />
    </LayoutWrapper>
  );
};

export default HistoryToDoScreen;
