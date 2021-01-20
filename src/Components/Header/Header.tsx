import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, css } from "aphrodite";
import { typography, palette } from "styles/index";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <p className={css(typography.logoFont, styles.logoText)}>
      {t("title-app")}
    </p>
  );
};

const styles = StyleSheet.create({
  logoText: {
    color: `${palette.white}`,
    textShadow: `2px 2px 2px 2px ${palette.black}`,
  },
});
