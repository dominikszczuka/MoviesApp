import React from "react";
import { useTranslation } from "react-i18next";
import { default as NavLinkStyles } from "../Nav/Nav.module.scss";
import bemCssModule from "bem-css-modules";
import { LinkElements } from "constants/types/Link";
import { Link } from "react-router-dom";

const style = bemCssModule(NavLinkStyles);

export interface NavLinkProps {
  link: LinkElements;
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const { t } = useTranslation();

  return (
    <li className={style("item")}>
      <Link to={link.to} className={style("link")}>
        {t(`${link.title}`)}
      </Link>
    </li>
  );
};

export default NavLink;
