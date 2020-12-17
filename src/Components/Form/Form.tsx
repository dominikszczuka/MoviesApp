import React from "react";
import { StyleSheet, css } from "aphrodite";
import CustomInput from "components/CustomInput/CustomInput";

const Form = () => {
  return (
    <div className={css(styles.wrapper)}>
      <h2>Add new tasks</h2>
      <form>
        <CustomInput
          placeholder="Write title your task..."
          type="text"
          disabled={false}
          customStyle={styles.inputText}
        />
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inputText: {
    height: "24px",
    borderColor: "red",
  },
});

export default Form;
