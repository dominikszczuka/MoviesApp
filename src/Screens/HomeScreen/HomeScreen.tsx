import React from "react";
import ToDo from "components/ToDo/ToDo";
import bemCssModule from "bem-css-modules";
import { default as HomeScreenStyles } from "./HomeScreen.module.scss";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import { useTranslation } from "react-i18next";
const style = bemCssModule(HomeScreenStyles);

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <LayoutWrapper>
      <HeaderPanel buttonTitle="Add task" />
      <h1 className={style("title")}>{t("active-tasks")}</h1>
      <ToDo />
    </LayoutWrapper>
  );
};

export default HomeScreen;
