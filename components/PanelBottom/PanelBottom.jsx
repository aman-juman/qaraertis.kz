import styles from "./PanelBottom.module.scss";
import PhoneIcon from "./icons/phone.svg";
import TelegramIcon from "./icons/telegram.svg";
import WhatsappIcon from "./icons/whatsapp.svg";


const PanelBottom = () => {
    return (
        <div className={styles.show}>
            <div className={styles.wrap}>
                <div className={styles.panel}>
                    <a href="tel:+77058110947"><PhoneIcon/></a>
                    <a href="https://wa.me/77051860084?text=Меня%20интересует%20породистые%20овцы/лошади/скоты"><TelegramIcon/></a>
                    <a href="https://wa.me/77051860084?text=Меня%20интересует%20породистые%20овцы/лошади/скоты"><WhatsappIcon/></a>
                </div>
            </div>
        </div>
    );
};

export default PanelBottom;
