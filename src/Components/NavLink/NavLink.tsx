import React from 'react';

import { default as NavLinkStyles} from '../Nav/Nav.module.scss';
import bemCssModule from 'bem-css-modules';
import { Link } from 'constants/types/Link';
const style=bemCssModule(NavLinkStyles);

export interface NavLinkProps {
    link:Link
}

const NavLink: React.FC<NavLinkProps> = ({link}) => {
    return(
        <li className={style('item')}>
            <a href="" className={style('link')}>{link.title}</a>
        </li>
    );
};

export default NavLink;
