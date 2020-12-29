import React from "react";
import { css, StyleSheet } from "aphrodite";
import { palette } from "styles";

const Loader = () => {
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.spinner)}></div>
    </div>
  );
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
    width: "80px",
    height: "80px",
    ":after": {
      content: '" "',
      display: "block",
      width: "64px",
      height: "64px",
      margin: "8px",
      borderRadius: "50%",
      border: `6px solid ${palette.black}`,
      borderColor: `${palette.black} transparent ${palette.black} transparent`,
      animation: `spinner 1.2s linear infinite`,
      animationName: [translateKeyframes],
    },
  },
});

export default Loader;
