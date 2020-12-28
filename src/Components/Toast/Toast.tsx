import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";
import Icon, { IconTypes } from "components/Icon/Icon";
import { palette, typography } from "styles";
import CustomButton from "components/CustomButton/CustomButton";

interface ToastProps {
  title: string;
  description: string;
  icon: IconTypes;
}

const Toast: React.FC<ToastProps> = ({ title, description, icon }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isShow]);

  if (!isShow) return null;
  return (
    <div className={css(styles.toastContainer)}>
      <Icon {...icon} />
      <div className={css(styles.toastInformation)}>
        <p className={css(typography.bigFont, styles.tostTitle)}>{title}</p>
        <p className={css(typography.normalFont, styles.toastDescription)}>
          {description}
        </p>
      </div>
      <CustomButton
        label="X"
        onClick={() => {
          setIsShow(!isShow);
        }}
        customStyles={styles.toastButton}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "fixed",
    top: "12px",
    right: "12px",
    display: "flex",
    alignItems: "center",
    backgroundColor: `${palette.success}`,
    padding: "15px",
    borderRadius: "5px",
  },
  toastInformation: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "270px",
    margin: "0 10px",
  },
  tostTitle: {
    textTransform: "uppercase",
    color: `${palette.white}`,
  },
  toastDescription: {
    color: `${palette.white}`,
  },
  toastButton: {
    backgroundColor: `${palette.white}`,
    fontSize: "24px",
    padding: "2px 8px",
  },
});

export default Toast;
