import React from "react";

import { StyleSheet, css, StyleDeclaration } from "aphrodite";

export interface CustomInputProps {
  type: "text" | "number" | "email";
  placeholder: string;
  disabled: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle: StyleDeclaration;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  onChange,
  disabled,
  customStyle,
}: CustomInputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={css(styles.input, customStyle)}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  input: {
    height: "50px",
    borderColor: "green",
    fontWeight: "bold",
  },
});

export default CustomInput;
