import React from "react";
import { useTranslation } from "react-i18next";

import { LinkElement } from "constants/types/LinkElement";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { palette } from "styles/palette";

export interface NavLinkProps {
  link: LinkElement;
}

export const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const { t } = useTranslation();

  return (
    <li>
      <Link className={css(style.linkElement)} to={link.to}>
        {t(`${link.title}`)}
      </Link>
    </li>
  );
};

const style = StyleSheet.create({
  linkElement: {
    color: `${palette.white}`,
    textDecoration: "none",
  },
});
