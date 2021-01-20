import React from "react";
import { css, StyleSheet } from "aphrodite";
import { palette } from "styles";

export const Loader = () => {
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
  spinner: {
    display: "inline-block",
    width: "40px",
    height: "40px",
    margin: "0 auto",
    ":after": {
      content: '" "',
      display: "block",
      width: "24px",
      height: "24px",
      margin: "0px auto",
      borderRadius: "50%",
      border: `6px solid ${palette.darkBlueTwo}`,
      borderColor: `${palette.darkBlueTwo} transparent ${palette.darkBlueTwo} transparent`,
      animation: `spinner 1.2s linear infinite`,
      animationName: [translateKeyframes],
    },
  },
});
