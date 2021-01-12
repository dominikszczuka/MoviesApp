import React from "react";
import { StyleSheet, css } from "aphrodite";
import CustomInput from "components/CustomInput/CustomInput";
import { lightShadow, palette, typography } from "styles/index";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  return (
    <div className={css(styles.formWrapper)}>
      <h2 className={css(styles.formTitle)}>{t("add-new-task")}</h2>
      <form className={css(styles.form)}>
        <CustomInput
          placeholder={t("form.write-title")}
          type="text"
          disabled={false}
        />
        <CustomInput
          placeholder={t("form.write-description")}
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
    boxShadow: `${lightShadow}`,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formTitle: {
    ...typography.logoFont,
    color: `${palette.white}`,
  },
});

export default Form;
