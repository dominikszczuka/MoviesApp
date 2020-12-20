import React from "react";
import Nav from "components/Nav/Nav";

import bemCssModule from "bem-css-modules";
import { default as HeaderPanelStyles } from "./HeaderPanel.module.scss";
import Header from "components/Header/Header";

const style = bemCssModule(HeaderPanelStyles);

const HeaderPanel = () => {
  return (
    <div className={style()}>
      <Header />
      <Nav />
    </div>
  );
};

export default HeaderPanel;
