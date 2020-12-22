import React, { ReactNode } from "react";

import NavLink from "../NavLink/NavLink";

import { useTranslation } from "react-i18next";
import { LinkElement } from "constants/types/LinkElement";
import { StyleSheet, css } from "aphrodite";
import { palette } from "styles/palette";
import { typography } from "styles/typography";

const Nav = () => {
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

export default Nav;
