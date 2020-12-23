import React from "react";

import { StyleSheet, css, StyleDeclaration } from "aphrodite";
import { palette } from "styles/palette";

export interface CustomInputProps {
  type: "text" | "number" | "email";
  placeholder: string;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle?: StyleDeclaration;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  onChange,
  disabled,
  customStyle,
}: CustomInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={css(styles.input, customStyle, disabled && styles.disabled)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "400px",
    padding: "10px 5px",
    margin: "10px 0px",
    border: `3px solid ${palette.darkBlue}`,
    borderRadius: "10px",
  },
  disabled: {
    backgroundColor: "gray",
  },
});

export default CustomInput;
