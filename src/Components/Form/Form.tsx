/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import CustomButton from "components/CustomButton/CustomButton";
import CustomInput from "components/CustomInput/CustomInput";
import CustomRadioButton from "components/CustomRadioButton/CustomRadioButton";
import CustomSelect from "components/CustomSelect/CustomSelect";

import { StyleSheet, css } from "aphrodite";
import { palette, typography } from "styles/index";
import { useTranslation } from "react-i18next";
import { Icons } from "constants/enums/Icons";
import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const categoryTitleOptions = [
  { value: "lifestyle", label: "Lifestyle" },
  { value: "work", label: "Work" },
  { value: "house", label: "House" },
  { value: "car", label: "Car" },
  { value: "children", label: "Children" },
  { value: "science", label: "Science" },
];

const validationSchema = () =>
  Yup.object().shape({
    taskTitle: Yup.string().required(),
  });

const Form = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      taskTitle: "",
      taskDescription: "",
      taskCategory: "",
      taskPriority: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      console.log(values);
    },
  });

  return (
    <div className={css(styles.formWrapper)}>
      <h2 className={css(typography.logoFont, styles.formTitle)}>
        {t("add-new-task")}
      </h2>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className={css(styles.form)}>
          <CustomInput
            name="taskTitle"
            type="text"
            placeholder={t("form.write")}
            label="form.title"
            onChange={formik.handleChange}
            value={formik.values.taskTitle}
          />
          <CustomInput
            name="taskDescription"
            type="text"
            placeholder={t("form.write")}
            label="form.description"
            onChange={formik.handleChange}
            value={formik.values.taskDescription}
          />
          <p className={css(typography.bigFont, styles.radioHeader)}>
            {t("choose-priority")}
          </p>
          <div className={css(styles.radioGroup)}>
            <Field
              component={CustomRadioButton}
              name="taskPriority"
              id="Low"
              label={t("priority.low")}
            />
            <Field
              component={CustomRadioButton}
              name="taskPriority"
              id="Medium"
              label={t("priority.medium")}
            />
            <Field
              component={CustomRadioButton}
              name="taskPriority"
              id="High"
              label={t("priority.high")}
            />
          </div>
          <CustomSelect
            label="Choose category"
            options={categoryTitleOptions}
            value={formik.values.taskCategory}
            onChange={(value) =>
              formik.setFieldValue("taskCategory", value.value)
            }
          />
          <CustomButton
            type="submit"
            label="Add task"
            onClick={() => {}}
            customStyles={styles.btnAddTask}
            icon={{
              iconName: Icons.faPlusSquare,
            }}
          />
        </form>
      </FormikProvider>
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
  radioGroup: {
    display: "flex",
    margin: "5px 0px 15px",
  },
  radioHeader: {
    marginTop: "15px",
    color: `${palette.white}`,
    textTransform: "uppercase",
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
