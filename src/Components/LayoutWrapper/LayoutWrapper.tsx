import React from "react";

import bemCssModule from "bem-css-modules";
import { default as LayoutWrapperStyles } from "./LayoutWrapper.module.scss";
const style = bemCssModule(LayoutWrapperStyles);

interface Props {}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return <div className={style()}>{children}</div>;
};

export default LayoutWrapper;
