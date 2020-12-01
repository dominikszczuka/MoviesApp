import React, { ReactNode } from 'react';

import NavLink from '../NavLink/NavLink';
import { default as NavLinkStyles} from './Nav.module.scss';
import bemCssModule from 'bem-css-modules';
import { Link } from 'constants/types/Link';
const style=bemCssModule(NavLinkStyles);

const Nav = () => {

    const links: Link[] = [
        {
            title:'Tasks',
            to:'/task'
        },
        {
            title:'Finished tasks',
            to:'/task'
        },
        {
            title:'Add task',
            to:'/task'
        },
    ]

    const renderLinksItems = ():ReactNode =>  ( links.map((link, index) => <NavLink key={index} link={link}/>))
    

    return(
        <nav className={style()}>
            <ul className={style('list')}>
                {renderLinksItems()}
            </ul>
        </nav>
    );
};

export default Nav;