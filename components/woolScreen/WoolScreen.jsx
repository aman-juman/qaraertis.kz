import styles from "./WoolScreen.module.scss";
import Image from "next/image";
import img1 from "public/woolProductBaskur.jpg";
import img2 from "public/wolProductClothes.jpg";
import img3 from "public/woolProductKiizjpg.jpg";
import img4 from "public/wolProductThread.jpg";
import {LanguageContext} from "@/pages";
import {useContext} from "react";

const dataBase = [
    {
        language: 'ru',
        circleContent: {
            first: "Овечья шерсть",
            second: "ДЕЛАЮТ",
            third: "Из шерсти",
            fourth: "ПРОДАЕТСЯ",
        },
        blockContent: [
            ["войлок", "покрытия для юрт", "валенки", "сырмаки"],
            ["фетровые шляпы,", "пальто", "шубы"],
            ["ковры", "потники под сёдла"],
            ["в технике фетр используется для прокладок и в качестве фильтрующего материала"],
        ]
    },
    {
        language: 'kz',
        circleContent: {
            first: "Қой жүні",
            second: "ЖАСАЛАДЫ",
            third: "Қой терісінде өсетін түк, түбіт, қылшық.",
            fourth: "САТЫЛАДЫ",
        },

        blockContent: [
            ["киіздің кейбір түрлері", "бау-басқұр", "арқан-жіп"],
            ["киімдер", "пальто", "тон"],
            ["кілем"],
            ["жіптер", "тұрмыстық шаруашылық бұйымдар"],
        ]
    },
];

const images = [
    {url: img1, alt:"фото из шерсти"},
    {url: img2, alt:"фото из шерсти"},
    {url: img3, alt:"фото из шерсти"},
    {url: img4, alt:"фото из шерсти"},
];
const WoolScreen = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const index = dataBase.findIndex(item => item.language === language);
    const data = dataBase[index]
    return (
        <section id="wool" className={styles.section}>
            <div className="container">
                <div className={styles.cube}>

                    <div className={styles.cubeHead}>
                        <div className={styles.circleStroke}>
                            <div className={styles.circlce}>
                                <h5 className={styles.firstText}>{data.circleContent.first}</h5>
                                <h4 className={styles.secondText}>{data.circleContent.second}</h4>
                                <p className={styles.thirdText}>{data.circleContent.third}</p>
                                <h5 className={styles.fourthText}>{data.circleContent.fourth}</h5>
                            </div>
                        </div>
                    </div>
                    {
                        images.map((item, i) => (
                            <div key={i} className={styles.block}>
                                <Image loading="lazy" placeholder="blur"  alt={item.alt} className={styles.img} src={item.url} />
                                <div className={styles.blockTitleWrap}>
                                    <Card>
                                        <ul className={styles.list}>
                                            {data.blockContent[i].map((item, index) => <li key ={index}>{item}</li>)}
                                        </ul>
                                    </Card>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

const Card = ({children}) => {
    return(
        <div className={styles.card}>
            {children}
        </div>
    )
}
export default WoolScreen;
