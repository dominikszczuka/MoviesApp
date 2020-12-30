import React from "react";
import { css, StyleDeclaration, StyleSheet } from "aphrodite";
import Icon, { IconTypes } from "components/Icon/Icon";
import { typography } from "styles/index";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import Loader from "components/Loader/Loader";

export interface CustomButtonProps {
  onClick: () => void;
  label: string;
  customStyles?: StyleDeclaration;
  disabled?: boolean;
  filled?: boolean;
  icon?: IconTypes;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  disabled,
  customStyles,
  filled,
  icon,
  isLoading,
}) => {
  const { loading } = useSelector((state: AppState) => state.todosReducer);

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
        {isLoading && loading ? (
          <Loader />
        ) : (
          label && !!icon && <Icon {...icon} />
        )}
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
