import React from "react";
import Nav from "components/Nav/Nav";

import bemCssModule from "bem-css-modules";
import { default as HeaderPanelStyles } from "./HeaderPanel.module.scss";
import Header from "components/Header/Header";

interface Props {
  titleButton: string;
}

const style = bemCssModule(HeaderPanelStyles);

const HeaderPanel: React.FC<Props> = ({ titleButton }) => {
  return (
    <div className={style()}>
      <Header />
      <Nav />
      <button className={style("button")}>{titleButton}</button>
    </div>
  );
};

export default HeaderPanel;
