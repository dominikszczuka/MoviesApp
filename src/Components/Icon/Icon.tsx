import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { StyleSheet, css } from "aphrodite";
export interface IconTypes {
  iconName: IconName;
  iconSize?: "1x" | "2x";
  color?: string;
}

const Icon: React.FC<IconTypes> = ({
  iconName,
  iconSize = "1x",
  color = "#ffffff",
}) => {
  return (
    <FontAwesomeIcon
      icon={iconName}
      size={iconSize}
      color={color}
      className={css(styles.icon)}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: "0px 8px",
  },
});

export default Icon;
