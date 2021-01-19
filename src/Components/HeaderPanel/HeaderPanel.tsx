import React, { ReactNode } from "react";

import { StyleSheet, css } from "aphrodite";

import Nav from "components/Nav/Nav";
import Header from "components/Header/Header";
import { lightShadow, palette } from "styles/palette";

interface HeaderPanelProps {
  actionButton: ReactNode;
}

const HeaderPanel: React.FC<HeaderPanelProps> = ({ actionButton }) => {
  return (
    <header className={css(styles.header)}>
      <div className={css(styles.headerPanel)}>
        <Header />
        <Nav />
      </div>
      <div className={css(styles.headerInformation)}>{actionButton}</div>
    </header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "2px",
    backgroundColor: `${palette.darkBlueTwo}`,
    boxShadow: `${lightShadow}`,
  },
  headerPanel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerInformation: {
    display: "flex",
    width: "100%",
  },
});

export default HeaderPanel;
