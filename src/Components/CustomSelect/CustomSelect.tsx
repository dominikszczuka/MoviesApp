/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import Select from "react-select";
import { css, StyleSheet } from "aphrodite";
import { palette, typography } from "styles";
import { SelectItem } from "constants/types/SelectItem";

export interface CustomSelectProps {
  onChange: (value) => {};
  options: SelectItem[];
  value: string;
  label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  options,
  value,
  label,
}) => {
  const defaultValue = (
    options: SelectItem[],
    value: string
  ): string | SelectItem | undefined => {
    if (!value) {
      return value;
    }
    const foundOption = options.find((option) => option.value === value);
    return foundOption;
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
