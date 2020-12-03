import React from "react";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import HeaderPanel from "../HeaderPanel/HeaderPanel";

import bemCssModule from "bem-css-modules";
import { default as LayoutWrapperStyles } from "./LayoutWrapper.module.scss";
const style = bemCssModule(LayoutWrapperStyles);

const LayoutWrapper = () => {
  return (
    <div className={style()}>
      <HeaderPanel />
      <HomeScreen />
    </div>
  );
};

export default LayoutWrapper;
