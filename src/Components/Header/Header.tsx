import React from "react";
import { useTranslation } from "react-i18next";
import "./header.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <p className="header__logo">{t("title-app")} </p>
    </header>
  );
};

export default Header;
