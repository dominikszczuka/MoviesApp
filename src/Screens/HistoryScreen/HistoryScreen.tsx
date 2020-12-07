import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import React from "react";
import { useTranslation } from "react-i18next";

const HistoryToDoScreen = () => {
  const { t } = useTranslation();

  const btnDeleteTasks = <button> Clear Tasks</button>;

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnDeleteTasks} />
      <h1>{t("history-tasks")}</h1>
    </LayoutWrapper>
  );
};

export default HistoryToDoScreen;
