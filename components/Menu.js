import React from 'react';
import {push as BurgerMenu} from "react-burger-menu";
import Link from "next/link";

const Menu =(props) => {
    return (
        <BurgerMenu {...props}>
            <Link passHref href="/" className="menu-item">
                Главная
            </Link>
            <Link passHref href="/#about" className="menu-item">
                О нас
            </Link>
            <Link passHref href="/#sheep" className="menu-item">
                Породистые овцы
            </Link>
            <Link passHref href="/#horse" className="menu-item">
                Породистые Лошади
            </Link>
            <Link passHref href="/#cow" className="menu-item">
                Породистые Скоты
            </Link>
        </BurgerMenu>
    );
};
export default Menu;