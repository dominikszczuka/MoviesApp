import React from "react";
import {
  BeamWrapper,
  CustomButton,
  HeaderPanel,
  LayoutWrapper,
  TodoList,
} from "components/index";
import { css, StyleSheet } from "aphrodite";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/store";
import { typography, palette } from "styles";
import { Icons } from "constants/enums/Icons";
import { deleteTodo } from "store/todo/todoActions";
import { Message } from "constants/types";
import { useAlert } from "react-alert";

const HistoryToDoScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { doneTodos } = useSelector((state: AppState) => state.todosReducer);

  const alert = useAlert();
  const idOfTodos = doneTodos.map((todo) => todo.id);

  const showAlert = (message: string, typeMessage: Message) => {
    switch (typeMessage) {
      case "success":
        alert.success(t(message));
        break;
      case "show":
        alert.show(message);
        break;
      case "error":
        alert.show(message);
        break;
    }
  };

  const btnDeleteTasksAll = (
    <CustomButton
      type="button"
      label={t("delete-tasks")}
      customStyles={styles.btnDelete}
      icon={{
        iconName: Icons.faCalendarTimes,
      }}
      onClick={() => dispatch(deleteTodo(idOfTodos, showAlert))}
    />
  );

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnDeleteTasksAll} />
      <BeamWrapper customStyles={styles.beamStyles}>
        <h2 className={css(typography.logoFont, styles.tasksHeader)}>
          {t("history-tasks")}
        </h2>
      </BeamWrapper>
      {doneTodos.length > 0 ? (
        <TodoList todos={doneTodos} />
      ) : (
        <p className={css(typography.bigFont)}>{t("finish-tasks")}</p>
      )}
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  tasksHeader: {
    color: `${palette.white}`,
  },
  btnDelete: {
    color: `${palette.white}`,
    border: `2px solid ${palette.white}`,
    backgroundColor: `${palette.darkBlue}`,
  },
  beamStyles: {
    margin: "10px 0px",
    alignItems: "baseline",
  },
});

export default HistoryToDoScreen;
