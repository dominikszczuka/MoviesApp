import React, { ReactNode } from "react";

import { NavLink } from "components";
import { useTranslation } from "react-i18next";
import { LinkElement } from "constants/types/LinkElement";
import { StyleSheet, css } from "aphrodite";
import { typography, palette } from "styles";

export const Nav: React.FC = () => {
  const { t } = useTranslation();

  const links: LinkElement[] = [
    {
      title: `${t("menu.tasks")}`,
      to: "/",
    },
    {
      title: `${t("menu.finished-tasks")}`,
      to: "/history",
    },
  ];

  const renderLinksItems = (): ReactNode =>
    links.map((link, index) => <NavLink key={index} link={link} />);

  return (
    <nav>
      <ul className={css(typography.bigFont, style.navigation)}>
        {renderLinksItems()}
      </ul>
    </nav>
  );
};

const style = StyleSheet.create({
  navigation: {
    display: "flex",
    justifyContent: "space-around",
    width: "250px",
    color: `${palette.white}`,
    listStyle: "none",
  },
});
