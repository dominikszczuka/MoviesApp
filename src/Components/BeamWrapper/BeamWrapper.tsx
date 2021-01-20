import React from "react";
import { css, StyleDeclaration, StyleSheet } from "aphrodite";
import { lightShadow, palette } from "styles";

interface BeamWrapperProps {
  customStyles?: StyleDeclaration;
}

export const BeamWrapper: React.FC<BeamWrapperProps> = ({
  children,
  customStyles,
}) => {
  return <div className={css(styles.wrapper, customStyles)}>{children}</div>;
};

const styles = StyleSheet.create({
  wrapper: {
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
});
