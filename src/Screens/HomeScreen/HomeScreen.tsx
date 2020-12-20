import React, { useEffect, useState } from "react";
import Todo from "components/Todo/Todo";
import bemCssModule from "bem-css-modules";
import { default as HomeScreenStyles } from "./HomeScreen.module.scss";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import { useTranslation } from "react-i18next";
import { fetchTodos } from "store/todo/todoActions";
import { useDispatch } from "react-redux";
import Form from "components/Form/Form";
import { StyleSheet } from "aphrodite";
import CustomButton from "components/CustomButton/CustomButton";

const style = bemCssModule(HomeScreenStyles);

const HomeScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <LayoutWrapper>
      <HeaderPanel />
      <CustomButton
        label="Add task"
        onClick={() => setShowForm(!showForm)}
        filled={false}
        disabled={false}
        customStyles={styles.btn}
      />
      <h1 className={style("title")}>{t("active-tasks")}</h1>
      {showForm && <Form />}
      <Todo />
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  btn: {
    border: "1px solid blue",
    color: "blue",
  },
});

export default HomeScreen;
