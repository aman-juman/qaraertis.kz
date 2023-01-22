import styles from "./Footer.module.scss";
import Logo from "../../public/logo.svg";
import Icon1 from "./icons/google.svg";
import Icon2 from "./icons/whatsapp.svg";
import Icon3 from "./icons/telegram.svg";
import Icon4 from "./icons/instagram1.svg";
import Link from "next/link";


const Footer = () => {
    return (
        <footer id="contacts" className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.desc}>
                            <h6>Наш адрес:</h6>
                            <p>ВКО, г. Зайсан, ул. Малдыбаева 85</p>
                        </div>
                        <div className={styles.desc}>
                            <h6>Телефоны:</h6>
                            <p>+7 705 811 09 47</p>
                            <p>+7 705 186 00 84</p>
                        </div>
                    </div>
                    <Link href="/">
                        <Logo/>
                    </Link>

                    <div className={styles.right}>
                        <a style={{
                            cursor: "pointer",
                            color: "#CEE8B7",
                            fontSize: "14px",
                            textDecoration: "underline",
                            fontWeight: "bold"
                        }} href="https://wa.me/77064107828?text=Я%20хочу%20Заказать%20сайт">Разработка сайта</a>
                        <p>Наши социальные сети</p>
                        <div className={styles.socials}>
                            <a href="https://www.google.com/maps/place/FVCG%2BP5G,+Zaysan+070000/@47.4722644,84.8759043,19z/data=!4m13!1m7!3m6!1s0x42bd37bb2a54b50d:0xf98f0182ee604f5d!2z0JzQsNC70LTRi9Cx0LDQtdCyINC606nRiNC10YHRliwgWmF5c2FuIDA3MDAwMA!3b1!8m2!3d47.4718075!4d84.8749602!3m4!1s0x42bd370b29a6b9b5:0x7b8d0b271cb8db09!8m2!3d47.471784!4d84.8754856"> <Icon1/></a>

                            <a href="https://wa.me/77058110947?text=Меня%20интересует%20породистые%20овцы/лошади/скоты"><Icon2/></a>
                            <a href="https://wa.me/77058110947?text=Меня%20интересует%20породистые%20овцы/лошади/скоты"><Icon3/></a>
                            <a href=""> <Icon4/></a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
