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
            <Link passHref href="/#wool" className="menu-item">
                Продажа шерсти
            </Link>
            <Link passHref href="/#videoBlock" className="menu-item">
                Видео блог
            </Link>
            <Link passHref href="/#gallery" className="menu-item">
                Галерея
            </Link>
            <Link passHref href="/#callOrder" className="menu-item">
                Заказать звонок
            </Link>
            <Link passHref href="/#advantages" className="menu-item">
                Достижения
            </Link>
        </BurgerMenu>
    );
};
export default Menu;