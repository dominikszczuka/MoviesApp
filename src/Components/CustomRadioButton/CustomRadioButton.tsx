/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { css, StyleSheet } from "aphrodite";
import { palette, typography } from "styles";

interface CustomRadioButtonProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: any) => void;
  id: string;
  label: string;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  name,
  value,
  onChange,
  onBlur,
  id,
  label,
}) => {
  return (
    <label className={css(typography.bigFont, styles.radioLabel)}>
      {label}
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={css(styles.radioInput)}
      />
    </label>
  );
};

const styles = StyleSheet.create({
  radioLabel: {
    color: `${palette.white}`,
  },
  radioInput: {
    margin: "0px 5px",
  },
});

export default CustomRadioButton;
