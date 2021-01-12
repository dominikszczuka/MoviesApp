import React from "react";
import CustomInput from "components/CustomInput/CustomInput";

import { css, StyleSheet } from "aphrodite";
import { useTranslation } from "react-i18next";
import { palette, typography } from "styles";

const SearchFilterPanel = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className={css(typography.bigFont, styles.title)}>
        {t("search-filter-task")}
      </p>
      <CustomInput placeholder={t("search-task-by-title")} type="text" />
    </div>
  );
};

const styles = StyleSheet.create({
  title: {
    color: `${palette.white}`,
  },
});
export default SearchFilterPanel;
