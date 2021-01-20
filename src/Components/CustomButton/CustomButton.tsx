import React from "react";
import { css, StyleDeclaration, StyleSheet } from "aphrodite";
import { Icon, Loader } from "components";
import { typography } from "styles/index";
import { IconTypes } from "constants/types/IconTypes";

export interface CustomButtonProps {
  type: "button" | "submit";
  onClick?: () => void;
  label: string;
  customStyles?: StyleDeclaration;
  disabled?: boolean;
  filled?: boolean;
  icon?: IconTypes;
  loading?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  onClick,
  label,
  disabled,
  customStyles,
  filled,
  icon,
  loading,
}) => {
  const labelContent = (
    <>
      {!!icon && <Icon {...icon} />}
      <p>{label}</p>
    </>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={css(
        styles.btn,
        typography.buttonFont,
        styles.hover,
        customStyles,
        disabled && styles.disabled
      )}
      data-filled={filled}
    >
      {loading ? <Loader /> : labelContent}
    </button>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    ":focus": {
      outline: "none",
    },
  },
  hover: {
    ":hover": {
      cursor: "pointer",
    },
  },
  disabled: {
    ":hover": {
      cursor: "no-drop",
    },
    opacity: 0.4,
  },
});
