import React, { ReactNode } from "react";

import NavLink from "../NavLink/NavLink";
import { default as NavLinkStyles } from "./Nav.module.scss";
import bemCssModule from "bem-css-modules";
import { useTranslation } from "react-i18next";
import { LinkElement } from "constants/types/LinkElement";

const style = bemCssModule(NavLinkStyles);

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
    <nav className={style()}>
      <ul className={style("list")}>{renderLinksItems()}</ul>
    </nav>
  );
};

export default Nav;
