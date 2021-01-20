import React, { ReactNode } from "react";
import { StyleSheet, css } from "aphrodite";
import { Nav, Header, BeamWrapper } from "components/index";
import { lightShadow, palette } from "styles/palette";

interface HeaderPanelProps {
  actionButton: ReactNode;
}

export const HeaderPanel: React.FC<HeaderPanelProps> = ({ actionButton }) => {
  return (
    <BeamWrapper>
      <div className={css(styles.headerPanel)}>
        <Header />
        <Nav />
      </div>
      <div className={css(styles.headerInformation)}>{actionButton}</div>
    </BeamWrapper>
  );
};

const styles = StyleSheet.create({
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
