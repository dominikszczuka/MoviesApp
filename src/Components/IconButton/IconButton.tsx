import React from "react";
import { Icon } from "components/index";
import { IconTypes } from "constants/types";
import { palette } from "styles";
import { css, StyleSheet, StyleDeclaration } from "aphrodite";

interface IconButtonProps {
  onClick?: () => void;
  customStyles?: StyleDeclaration;
  icon: IconTypes;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  customStyles,
  icon,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css(styles.btn, customStyles)}
    >
      <Icon {...icon} />
    </button>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: "fixed",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: `${palette.blue}`,
    border: `2px solid ${palette.darkBlueTwo}`,
    ":focus": {
      outline: "none",
    },
    ":hover": {
      cursor: "pointer",
    },
  },
});
