import React from "react";
import { css, StyleSheet } from "aphrodite";
interface Props {}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return <div className={css(style.wrapper)}>{children}</div>;
};

const style = StyleSheet.create({
  wrapper: {
    maxWidth: "1200px",
    margin: "0px auto",
  },
});

export default LayoutWrapper;
