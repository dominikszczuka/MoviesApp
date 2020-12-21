import React from "react";
import { css, StyleDeclaration, StyleSheet } from "aphrodite";
import Icon, { IconTypes } from "components/Icon/Icon";

export interface CustomButtonProps {
  onClick: () => void;
  label: string;
  customStyles?: StyleDeclaration;
  disabled?: boolean;
  filled?: boolean;
  icon?: IconTypes;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  disabled,
  customStyles,
  filled,
  icon,
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
        {!!icon && <Icon {...icon} />}
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "2px solid #e3e3e3",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 2px #000",
    marginTop: "15px",
    padding: "5px",
  },
  hover: {
    ":hover": {
      cursor: "pointer",
      boxShadow: "2px 2px 2px 2px #555",
    },
  },
});

export default CustomButton;
