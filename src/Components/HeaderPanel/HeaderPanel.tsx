import React, { ReactNode } from "react";
import Nav from "components/Nav/Nav";

import bemCssModule from "bem-css-modules";
import { default as HeaderPanelStyles } from "./HeaderPanel.module.scss";
import Header from "components/Header/Header";

interface Props {
  actionButton: ReactNode;
}

const style = bemCssModule(HeaderPanelStyles);

const HeaderPanel: React.FC<Props> = ({ actionButton }) => {
  return (
    <div className={style()}>
      <Header />
      <Nav />
      {actionButton}
    </div>
  );
};

export default HeaderPanel;
