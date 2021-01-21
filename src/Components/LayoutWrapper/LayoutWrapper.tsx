import React from "react";
import { css, StyleSheet } from "aphrodite";
import { CustomButton, IconButton } from "components";
import { Icons } from "constants/enums/Icons";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import {
  removeFromLocaleStorage,
  saveToLocaleStorage,
} from "utils/helpers/localeStorageHelper";
import { localStorageKeys as KEYS } from "constants/enums";
interface Props {}

export const LayoutWrapper: React.FC<Props> = ({ children }) => {
  const { todos, doneTodos } = useSelector(
    (state: AppState) => state.todosReducer
  );

  const saveTasksInLocaleStorage = () => {
    saveToLocaleStorage(KEYS.todos, todos);
    saveToLocaleStorage(KEYS.doneTodos, doneTodos);
  };

  const deleteTasksFromLocaleStorage = () => {
    removeFromLocaleStorage(KEYS.todos);
    removeFromLocaleStorage(KEYS.doneTodos);
  };

  return (
    <>
      <div className={css(styles.wrapper)}>{children}</div>
      <IconButton
        customStyles={styles.btnAdd}
        icon={{ iconName: Icons.faFileDownload }}
        onClick={saveTasksInLocaleStorage}
      />

      <IconButton
        customStyles={styles.btnDelete}
        icon={{ iconName: Icons.faTrashAlt }}
        onClick={deleteTasksFromLocaleStorage}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: "1200px",
    margin: "0px auto",
    position: "relative",
  },
  btnAdd: {
    bottom: "20px",
    left: "10px",
  },
  btnDelete: {
    bottom: "20px",
    left: "55px",
  },
});
