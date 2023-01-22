import styles from "./Navbar.module.scss";
import Link from "next/link";
import cn from "classnames";
import PhoneIcon from "./phone.svg";
import LocationIcon from "./location.svg";
import InstagramIcon from "./instagram.svg";
import FacebookIcon from "./facebook.svg";
import YoutubeIcon from "./youtube.svg";
import {useState} from "react";


const menuArr = [
    {
        name: "Главная",
        href: "/"
    },
    {
        name: "О нас",
        href: "/#about"
    },
    {
        name: "Породистые овцы",
        href: "/#sheep"
    },
    {
        name: "Породистые Лошади",
        href: "/#horse"
    },
    {
        name: "Породистые Скоты",
        href: "/#cow"
    },
]
const Navbar = () => {
    const [langActive, setLangActive] = useState("ru");
    const menu = menuArr.map(({name, href}, i) => (
        <li className={styles.menuItem} key={i}>
            <Link href={href}>{name}</Link>
        </li>
    ));
    const changeLang = lang =>{
        setLangActive(lang)
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <a
                        className={styles.topItem}
                        href="tel:77058110947">
                        <PhoneIcon />
                        <span>+7(705) 811-09-47</span>
                    </a>
                    <a
                        className={styles.topItem}
                        href="https://www.google.com/maps/place/FVCG%2BP5G,+Zaysan+070000/@47.4722644,84.8759043,19z/data=!4m13!1m7!3m6!1s0x42bd37bb2a54b50d:0xf98f0182ee604f5d!2z0JzQsNC70LTRi9Cx0LDQtdCyINC606nRiNC10YHRliwgWmF5c2FuIDA3MDAwMA!3b1!8m2!3d47.4718075!4d84.8749602!3m4!1s0x42bd370b29a6b9b5:0x7b8d0b271cb8db09!8m2!3d47.471784!4d84.8754856">
                        <LocationIcon />
                        <span>ВКО, г.Зайсан, ул.Малдыбаева 85</span>
                    </a>
                </div>
                <div className={styles.topRight}>
                    <InstagramIcon />
                    <FacebookIcon />
                    <YoutubeIcon />
                </div>

            </div>
            <div className={styles.bottom}>
                <ul className={styles.menu}>
                    {menu}
                </ul>
                <div className={styles.langBlock}>
                    <div onClick={() => changeLang("kz")} className={cn(styles.langItem, {[styles.activeLang]: langActive === "kz"})}>ҚАЗ</div>
                    <div onClick={() => changeLang("ru")} className={cn(styles.langItem, {[styles.activeLang]: langActive === "ru"})}>РУС</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
