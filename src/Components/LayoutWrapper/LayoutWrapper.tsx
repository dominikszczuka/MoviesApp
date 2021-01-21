import React from "react";
import { css, StyleSheet } from "aphrodite";
import { CustomButton } from "components";
import { palette } from "styles";
import { Icons } from "constants/enums/Icons";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import {
  addTodosLocalStorage,
  deleteTodosLocalStorage,
} from "utils/helpers/methodsForStorage";
interface Props {}

export const LayoutWrapper: React.FC<Props> = ({ children }) => {
  const { todos, doneTodos } = useSelector(
    (state: AppState) => state.todosReducer
  );

  return (
    <>
      <div className={css(styles.wrapper)}>{children}</div>
      <CustomButton
        type="button"
        customStyles={[styles.btnAdd, styles.btn]}
        icon={{ iconName: Icons.faFileDownload, iconSize: "1x" }}
        onClick={() => addTodosLocalStorage(todos, doneTodos)}
      />
      <CustomButton
        type="button"
        customStyles={[styles.btnDelete, styles.btn]}
        icon={{ iconName: Icons.faTrashAlt, iconSize: "1x" }}
        onClick={() => deleteTodosLocalStorage()}
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
  btn: {
    position: "fixed",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: `${palette.blue}`,
    border: `2px solid ${palette.darkBlueTwo}`,
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
