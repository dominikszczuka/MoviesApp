import React from "react";
import CustomButton from "components/CustomButton/CustomButton";
import HeaderPanel from "components/HeaderPanel/HeaderPanel";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import { useTranslation } from "react-i18next";

const HistoryToDoScreen = () => {
  const { t } = useTranslation();
  const showMessage = () => {};
  const btnDeleteTasksAll = (
    <CustomButton
      type="button"
      label={t("delete-task")}
      onClick={() => showMessage()}
    />
  );

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnDeleteTasksAll} />
      <h1>{t("history-tasks")}</h1>
    </LayoutWrapper>
  );
};

export default HistoryToDoScreen;
