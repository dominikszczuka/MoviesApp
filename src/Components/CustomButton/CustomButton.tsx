import React from "react";
import { css, StyleDeclaration, StyleSheet } from "aphrodite";
import Icon, { IconTypes } from "components/Icon/Icon";
import { palette, typography } from "styles/index";
import Loader from "components/Loader/Loader";

export interface CustomButtonProps {
  type: "button" | "submit";
  onClick: () => void;
  label: string;
  customStyles?: StyleDeclaration;
  disabled?: boolean;
  filled?: boolean;
  icon?: IconTypes;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
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
    <div>
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
    </div>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hover: {
    ":hover": {
      cursor: "pointer",
    },
  },
  disabled: {
    backgroundColor: `${palette.black}`,
    border: `${palette.black}`,
  },
});

export default CustomButton;
