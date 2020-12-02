import React from "react";
import { useTranslation } from "react-i18next";
import { default as NavLinkStyles } from "../Nav/Nav.module.scss";
import bemCssModule from "bem-css-modules";
import { Link } from "constants/types/Link";
const style = bemCssModule(NavLinkStyles);

export interface NavLinkProps {
  link: Link;
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const { t } = useTranslation();

  return (
    <li className={style("item")}>
      <a href="/link" className={style("link")}>
        {t(`${link.title}`)}
      </a>
    </li>
  );
};

export default NavLink;
