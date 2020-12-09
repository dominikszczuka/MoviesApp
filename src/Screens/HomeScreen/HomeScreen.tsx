import React, { useEffect } from "react";
import Todo from "components/Todo/Todo";
import bemCssModule from "bem-css-modules";
import { default as HomeScreenStyles } from "./HomeScreen.module.scss";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import { useTranslation } from "react-i18next";
import { AppState } from "store/store";
import { useDispatch, useSelector } from "react-redux";

const style = bemCssModule(HomeScreenStyles);

const HomeScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { todos } = useSelector((state: AppState) => state.todosReducer);

  const btnAddTask = <button>Add task</button>;

  useEffect(() => {
    console.log(todos);
  }, [dispatch, todos]);

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnAddTask} />
      <h1 className={style("title")}>{t("active-tasks")}</h1>
      <Todo />
    </LayoutWrapper>
  );
};

export default HomeScreen;
