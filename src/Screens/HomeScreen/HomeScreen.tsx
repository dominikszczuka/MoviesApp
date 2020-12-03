import React from "react";
import ToDo from "../../components/ToDo/ToDo";
import bemCssModule from "bem-css-modules";
import { default as HomeScreenStyles } from "./HomeScreen.module.scss";

const style = bemCssModule(HomeScreenStyles);

const HomeScreen = () => {
  return (
    <div className={style()}>
      <ToDo />
    </div>
  );
};

export default HomeScreen;
