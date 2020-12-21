import CustomButton from "components/CustomButton/CustomButton";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import React from "react";
import { useTranslation } from "react-i18next";

const HistoryToDoScreen = () => {
  const { t } = useTranslation();
  const showMessage = () => {};
  const btnDeleteTasksAll = (
    <CustomButton label="Delete tasks" onClick={() => showMessage()} />
  );

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnDeleteTasksAll} />
      <h1>{t("history-tasks")}</h1>
    </LayoutWrapper>
  );
};

export default HistoryToDoScreen;
