import React from "react";
import { css, StyleDeclaration, StyleSheet } from "aphrodite";
import Icon, { IconTypes } from "components/Icon/Icon";
import { typography } from "styles/typography";
//import { palette } from "styles/palette";
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
        className={css(
          styles.btn,
          typography.buttonFont,
          styles.hover,
          customStyles
        )}
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
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
  },
  hover: {
    ":hover": {
      cursor: "pointer",
    },
  },
});

export default CustomButton;
