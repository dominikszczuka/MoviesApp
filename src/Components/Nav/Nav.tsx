import React, { ReactNode } from "react";

import NavLink from "../NavLink/NavLink";
import { default as NavLinkStyles } from "./Nav.module.scss";
import bemCssModule from "bem-css-modules";
import { useTranslation } from "react-i18next";
import { LinkElements } from "constants/types/Link";

const style = bemCssModule(NavLinkStyles);

const Nav = () => {
  const { t } = useTranslation();

  const links: LinkElements[] = [
    {
      title: `${t("menu.pos1")}`,
      to: "/",
    },
    {
      title: `${t("menu.pos2")}`,
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
