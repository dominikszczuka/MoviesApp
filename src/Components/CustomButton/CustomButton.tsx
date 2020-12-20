import React from "react";
import { css, StyleDeclaration, StyleSheet } from "aphrodite";

export interface CustomButtonProps {
  onClick: () => void;
  label: string;
  customStyles: StyleDeclaration;
  disabled: boolean;
  filled: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  disabled,
  customStyles,
  filled,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={css(styles.btn, styles.hover, customStyles)}
        data-filled={filled}
      >
        {label}
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: "40px",
    backgroundColor: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "2px solid #e3e3e3",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 2px #000",
    marginTop: "15px",
  },
  hover: {
    ":hover": {
      cursor: "pointer",
      boxShadow: "2px 2px 2px 2px #555",
    },
  },
});

export default CustomButton;
