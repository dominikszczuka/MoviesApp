/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import CustomInput from "components/CustomInput/CustomInput";
import { palette, typography } from "styles/index";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import CustomButton from "components/CustomButton/CustomButton";
import Icon from "components/Icon/Icon";
import { Icons } from "constants/enums/Icons";
const Form = () => {
  const { t } = useTranslation();
  const categoryTitleOptions = [
    { value: "lifestyle", label: "Lifestyle" },
    { value: "work", label: "Work" },
    { value: "house", label: "House" },
    { value: "car", label: "Car" },
    { value: "children", label: "Children" },
    { value: "science", label: "Science" },
  ];

  return (
    <div className={css(styles.formWrapper)}>
      <h2 className={css(typography.logoFont, styles.formTitle)}>
        {t("add-new-task")}
      </h2>
      <form className={css(styles.form)}>
        <label className={css(typography.bigFont, styles.formInput)}>
          {t("form.title")}
          <CustomInput
            placeholder={t("form.write")}
            type="text"
            disabled={false}
          />
        </label>
        <label className={css(typography.bigFont, styles.formInput)}>
          {t("form.description")}
          <CustomInput
            placeholder={t("form.write")}
            type="text"
            disabled={false}
          />
        </label>
        <p className={css(typography.bigFont, styles.formRadioTitle)}>
          {t("choose-priority")}:
        </p>
        <div className={css(styles.formRadioWrapper)}>
          <label className={css(typography.bigFont, styles.formRadioLabel)}>
            {t("priority.low")}
            <input
              className={css(styles.formRadio)}
              name="isGoing"
              type="radio"
            />
          </label>
          <label className={css(typography.bigFont, styles.formRadioLabel)}>
            {t("priority.medium")}
            <input
              className={css(styles.formRadio)}
              name="isGoing"
              type="radio"
            />
          </label>
          <label className={css(typography.bigFont, styles.formRadioLabel)}>
            {t("priority.high")}
            <input
              className={css(styles.formRadio)}
              name="isGoing"
              type="radio"
            />
          </label>
        </div>
        <label className={css(typography.bigFont, styles.formSelectWrapper)}>
          <p className={css(styles.formSelectLabel)}>Choose category:</p>
          <Select
            className={css(styles.formSelect)}
            options={categoryTitleOptions}
          />
        </label>
        <CustomButton
          label="Add task"
          onClick={() => {}}
          customStyles={styles.btnAddTask}
          icon={{
            iconName: Icons.faPlusSquare,
          }}
        />
      </form>
    </div>
  );
};
const styles = StyleSheet.create({
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 0px",
    backgroundColor: `${palette.darkBlueTwo}`,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
  },
  formTitle: {
    ...typography.logoFont,
    color: `${palette.white}`,
  },
  formInput: {
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    color: palette.white,
  },
  formRadioTitle: {
    color: palette.white,
    textTransform: "uppercase",
  },
  formRadioWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: palette.white,
    textTransform: "uppercase",
  },
  formRadioLabel: {
    margin: "5px 10px",
    display: "flex",
    alignItems: "center",
    padding: "0px 5px",
  },
  formRadio: {
    margin: "0px 5px",
  },
  formSelectWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "350px",
    margin: "5px 0px",
  },
  formSelectLabel: {
    color: `${palette.white}`,
    textTransform: "uppercase",
    marginRight: "5px",
  },
  formSelect: {
    width: "125px",
  },
  btnAddTask: {
    marginTop: "15px",
    backgroundColor: `${palette.red}`,
    color: `${palette.white}`,
    border: `1px solid ${palette.darkRed}`,
    fontSize: "22px",
  },
});

export default Form;
