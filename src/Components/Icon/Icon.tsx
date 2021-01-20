import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyleSheet, css } from "aphrodite";
import { IconTypes } from "constants/types";

export const Icon: React.FC<IconTypes> = ({
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
    margin: "0px 5px",
  },
});
