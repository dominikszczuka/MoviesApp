import React from "react";
import Nav from "components/Nav/Nav";

import bemCssModule from "bem-css-modules";
import { default as HeaderPanelStyles } from "./HeaderPanel.module.scss";
import Header from "components/Header/Header";

interface Props {
  buttonTitle: string;
}

const style = bemCssModule(HeaderPanelStyles);

const HeaderPanel: React.FC<Props> = ({ buttonTitle }) => {
  return (
    <div className={style()}>
      <Header />
      <Nav />
      <button className={style("button")}>{buttonTitle}</button>
    </div>
  );
};

export default HeaderPanel;
