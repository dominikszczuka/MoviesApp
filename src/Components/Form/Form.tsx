import React from "react";
import { StyleSheet, css } from "aphrodite";
import CustomInput from "components/CustomInput/CustomInput";
import { palette } from "styles/palette";
import { typography } from "styles/typography";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  return (
    <div className={css(styles.formWrapper)}>
      <h2 className={css(typography.logoFont, styles.formTitle)}>
        {t("add-new-task")}
      </h2>
      <form className={css(styles.form)}>
        <CustomInput
          placeholder="Write title your task..."
          type="text"
          disabled={false}
        />
        <CustomInput
          placeholder="Write description"
          type="text"
          disabled={false}
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
  },
  formTitle: {
    color: `${palette.white}`,
  },
});

export default Form;
