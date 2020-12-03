import React from "react";
import ToDo from "components/ToDo/ToDo";
import bemCssModule from "bem-css-modules";
import { default as HomeScreenStyles } from "./HomeScreen.module.scss";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";

const style = bemCssModule(HomeScreenStyles);

const HomeScreen = () => {
  const buttonAdd = <button>Add task</button>;

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={buttonAdd} />
      <h1 className={style("title")}>Active Task</h1>
      <ToDo />
    </LayoutWrapper>
  );
};

export default HomeScreen;
