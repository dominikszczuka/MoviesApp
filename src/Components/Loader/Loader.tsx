import React from "react";
import { css, StyleSheet } from "aphrodite";
import { palette } from "styles";

const Loader = () => {
  return <div className={css(styles.spinner)}></div>;
};

const translateKeyframes = {
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    display: "inline-block",
    width: "40px",
    height: "40px",
    ":after": {
      content: '" "',
      display: "block",
      width: "24px",
      height: "24px",
      margin: "8px auto",
      borderRadius: "50%",
      border: `6px solid ${palette.darkBlueTwo}`,
      borderColor: `${palette.darkBlueTwo} transparent ${palette.darkBlueTwo} transparent`,
      animation: `spinner 1.2s linear infinite`,
      animationName: [translateKeyframes],
    },
  },
});

export default Loader;
