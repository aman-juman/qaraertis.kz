import styles from "./About.module.scss";
import Image from "next/image";

import img from "./img.jpeg";
import SheepIcon from "./sheep.svg";
import HorseIcon from "./horse.svg";
import CowIcon from "./cow.svg";
import {LanguageContext} from "@/pages";
import {useContext} from "react";


const dataBase = [
    {
        language: "ru",
        label: "О нас",
        title: "Кара Ертис",
        subTitle: "Крестьянское хозяйство племенных пород",
        description: "Для выпаса овец лошадей и коров хозяйство располагает частным пастбищным угодием общей площадью 30.000 гектар земли расположенный вдоль реки Чёрный Иртыш и летнее пастбище в горах (жайлау) площадью 900 гектар.",
        textLabel: "Круглогодичное пастбищное содержание",
        text: 'В 2003 году «Кара Иртыс» построил торговый дом в Зайсане, способствуя развитию экономики района.',
        quantities: [
            {
                name: "sheep",
                count: 6000
            },
            {
                name: "horse",
                count: 1000
            },
            {
                name: "cow",
                count: 300
            }
        ],
        options: "голов"
    },
    {
        language: "kz",
        label: "Біз туралы",
        title: "Қара Ертіс",
        subTitle: "Асыл тұқымды шаруа қожалығы",
        description: "Қой, жылқы және сиыр бағу үшін шаруашылықтың Қара Ертіс өзенінің бойында орналасқан жалпы ауданы 30 000 га жеке жайылымдық жері және 900 га жазғы жайлауы бар.",
        textLabel: "Жыл бойы мал жаю",
        text: "2003 жылы Зайсан қаласына 'Қара Ертіс' сауда үйін салып,аудан экономикасын дамытуға үлесін қосып келеді.",
        quantities: [
            {
                name: "sheep",
                count: 6000
            },
            {
                name: "horse",
                count: 1000
            },
            {
                name: "cow",
                count: 300
            }
        ],
        options: "бас"
    },
]
const About = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const index = dataBase.findIndex(item => item.language === language);
    const data = dataBase[index];
    const icons = [
        <SheepIcon />,
        <HorseIcon/>,
        <CowIcon/>
    ]

    const list = data.quantities.map(({count}, i) => (
        <li key={i} className={styles.iconListItem}>
            {icons[i]}
            <p className={styles.iconListItemCount}>{count}</p>
            <p className={styles.iconListItemOption}>{data.options}</p>
        </li>
    ))
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.imgWrap}>
                        <div className={styles.img}>
                            <Image placeholder="blur" src={img}/>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentTop}>
                            <h5 className={styles.contentTopLabel}>{data.label}</h5>
                            <h3 className={styles.contentTopTitle}>"{data.title}"</h3>
                            <h5 className={styles.contentTopSubTitle}>{data.subTitle}</h5>
                            <h5 className={styles.contentTopPrevDescription}>{data.textLabel}</h5>
                        </div>
                        <p className={styles.contentCenter}>{data.description}</p>
                        <div className={styles.contentBottom}>
                            {/*<h5 className={styles.contentBottomTitle}>{data.textLabel}</h5>*/}
                            <p className={styles.contentBottomDescription}>{data.text}</p>
                        </div>
                        <ul className={styles.iconsBlock}>
                            {list}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
