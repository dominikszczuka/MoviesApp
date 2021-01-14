/* eslint-disable jsx-a11y/label-has-for */
import React from "react";

import { StyleSheet, css, StyleDeclaration } from "aphrodite";
import { palette } from "styles/palette";
import { useTranslation } from "react-i18next";
import { typography } from "styles";

export interface CustomInputProps {
  name: string;
  type: "text" | "number" | "email";
  placeholder: string;
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  customStyle?: StyleDeclaration;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  type,
  placeholder,
  label,
  onChange,
  disabled = false,
  customStyle,
  value,
}: CustomInputProps) => {
  const { t } = useTranslation();

  return (
    <label className={css(typography.bigFont, styles.inputLabel)}>
      {t(`${label}`)}:
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={css(
          typography.normalFont,
          styles.input,
          customStyle,
          disabled && styles.disabled
        )}
      />
    </label>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    color: `${palette.white}`,
  },
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
