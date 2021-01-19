import React, { useEffect, useState } from "react";
import TodoList from "components/Todo/TodoList/TodoList";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import CustomButton from "components/CustomButton/CustomButton";
import Form from "components/Form/Form";
import Loader from "components/Loader/Loader";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Icons } from "constants/enums/Icons";
import { StyleSheet, css } from "aphrodite";
import { palette, typography, shadow, lightShadow } from "styles/index";
import { AppState } from "store/store";
import { DateTime } from "luxon";

const HomeScreen = () => {
  const { t } = useTranslation();

  const [showForm, setShowForm] = useState<boolean>(false);

  const { loading } = useSelector((state: AppState) => state.todosReducer);
  let date = DateTime.local().toLocaleString(DateTime.DATE_FULL);

  const { todos } = useSelector((state: AppState) => state.todosReducer);

  const activeTodos = todos.filter((todo) => !todo.completed);

  const btnAddTask = (
    <CustomButton
      type="button"
      label={t("new-task")}
      onClick={() => setShowForm(!showForm)}
      icon={{
        iconName: Icons.calendarPlus,
        color: `${palette.white}`,
      }}
      customStyles={styles.customBtnStyles}
      loading={loading}
      disabled={loading}
    />
  );

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnAddTask} />
      {showForm && <Form />}
      <div className={css(styles.tasksInformation)}>
        <h1 className={css(typography.logoFont, styles.tasksHeader)}>
          {t("active-tasks")}
        </h1>
        <p className={css(typography.normalFont, styles.tasksDate)}>{date}</p>
      </div>
      {loading ? <Loader /> : <TodoList todos={activeTodos} />}
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  customBtnStyles: {
    color: `${palette.white}`,
    background: `${palette.lightRed}`,
    border: `2px solid ${palette.darkRed}`,
    boxShadow: `${shadow}`,
  },
  tasksInformation: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "10px 0px",

    borderRadius: "2px",
    padding: "5px",

    backgroundColor: `${palette.darkBlueTwo}`,
    boxShadow: `${lightShadow}`,
  },
  tasksHeader: {
    color: `${palette.white}`,
    marginBottom: "-10px",
  },
  tasksDate: {
    textTransform: "uppercase",
    color: `${palette.white}`,
  },
});

export default HomeScreen;
