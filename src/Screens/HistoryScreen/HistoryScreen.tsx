import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import React from "react";
import { useTranslation } from "react-i18next";

const HistoryToDoScreen = () => {
  const { t } = useTranslation();

  return (
    <LayoutWrapper>
      <HeaderPanel buttonTitle="Clear tasks" />
      <h1>{t("history-tasks")}</h1>
    </LayoutWrapper>
  );
};

export default HistoryToDoScreen;
