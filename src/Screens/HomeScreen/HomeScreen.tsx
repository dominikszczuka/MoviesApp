import React, { useState } from "react";
import {
  TodoList,
  LayoutWrapper,
  HeaderPanel,
  CustomButton,
  Form,
  BeamWrapper,
} from "components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Icons } from "constants/enums/Icons";
import { StyleSheet, css } from "aphrodite";
import { palette, typography, shadow, lightShadow } from "styles";
import { AppState } from "store/store";
import { DateTime } from "luxon";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState<boolean>(false);
  const { loading } = useSelector((state: AppState) => state.todosReducer);
  const date = DateTime.local().toLocaleString(DateTime.DATE_FULL);
  const { todos } = useSelector((state: AppState) => state.todosReducer);

  const btnAddTask = (
    <CustomButton
      type="button"
      label={showForm ? t("form.close-form") : t("new-task")}
      onClick={() => setShowForm(!showForm)}
      icon={{
        iconName: `${
          showForm ? Icons.faCalendarTimes : Icons.calendarPlus
        }` as IconName,
        color: `${palette.white}`,
      }}
      customStyles={styles.customBtnStyles}
      loading={loading}
      disabled={loading}
    />
  );

  return (
    <LayoutWrapper>
      <HeaderPanel actionButton={btnAddTask} />
      {showForm && <Form />}
      <BeamWrapper customStyles={styles.beamStyles}>
        <h2 className={css(typography.logoFont, styles.tasksHeader)}>
          {t("active-tasks")}
        </h2>
        <p className={css(typography.normalFont, styles.tasksDate)}>{date}</p>
      </BeamWrapper>
      <TodoList todos={todos} />
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  customBtnStyles: {
    color: `${palette.white}`,
    background: `${palette.lightRed}`,
    border: `2px solid ${palette.darkRed}`,
    boxShadow: `${shadow}`,
  },
  tasksInformation: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "10px 0px",
    borderRadius: "2px",
    padding: "10px 15px",
    backgroundColor: `${palette.darkBlueTwo}`,
    boxShadow: `${lightShadow}`,
  },
  tasksHeader: {
    color: `${palette.white}`,
  },
  tasksDate: {
    textTransform: "uppercase",
    color: `${palette.white}`,
  },
  beamStyles: {
    margin: "10px 0px",
    alignItems: "baseline",
  },
});

export default HomeScreen;
