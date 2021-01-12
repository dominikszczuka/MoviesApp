/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import Select from "react-select";
import { css, StyleSheet } from "aphrodite";
import { palette, typography } from "styles";

export interface CustomSelectProps {
  onChange: (value) => {};
  options: {};
  value: string;
  label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  options,
  value,
  label,
}) => {
  const defaultValue = (options, value) => {
    return options
      ? options.find(
          (option: { value: string; label: string }) => option.value === value
        )
      : "";
  };

  return (
    <div className={css(styles.selectWrapper)}>
      <label className={css(typography.bigFont, styles.selectLabel)}>
        {label}:
      </label>
      <Select
        options={options}
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        className={css(typography.bigFont, styles.selectInput)}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  selectWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "310px",
  },
  selectLabel: {
    color: `${palette.white}`,
    textTransform: "uppercase",
  },
  selectInput: {
    width: "130px",
  },
});

export default CustomSelect;
