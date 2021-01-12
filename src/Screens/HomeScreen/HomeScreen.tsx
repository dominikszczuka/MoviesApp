import React, { useEffect, useState } from "react";
import Todo from "components/Todo/Todo";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import { useTranslation } from "react-i18next";
import { fetchTodos } from "store/todo/todoActions";
import { useDispatch, useSelector } from "react-redux";
import Form from "components/Form/Form";
import CustomButton from "components/CustomButton/CustomButton";
import { Icons } from "constants/enums/Icons";
import { StyleSheet, css } from "aphrodite";
import { palette, typography, shadow } from "styles/index";
import { useAlert } from "react-alert";
import { Message } from "constants/types/Message";
import { AppState } from "store/store";
import Loader from "components/Loader/Loader";
import { DateTime } from "luxon";

const HomeScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState<boolean>(false);
  const alert = useAlert();
  const { loading } = useSelector((state: AppState) => state.todosReducer);
  let date = DateTime.local().toLocaleString(DateTime.DATE_FULL);
  const btnAddTask = (
    <CustomButton
      label={t("add-task")}
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

  const showAlert = (message: string, typeMessage: Message) => {
    switch (typeMessage) {
      case "SUCCESS":
        alert.success(t(message));
        break;
      case "SHOW":
        alert.show(message);
        break;
      case "ERROR":
        alert.error(message);
        break;
    }
  };

  useEffect(() => {
    dispatch(fetchTodos(showAlert));
  }, [dispatch]);

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
      {loading ? <Loader /> : <Todo />}
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
    padding: "5px",
    backgroundColor: `${palette.darkBlueTwo}`,
    borderRadius: "5px",
    boxShadow: `${shadow}`,
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
