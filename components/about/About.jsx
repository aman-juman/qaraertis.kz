import styles from "./About.module.scss";
import Image from "next/image";

import img from "./img.jpeg";
import SheepIcon from "./sheep.svg";
import HorseIcon from "./horse.svg";
import CowIcon from "./cow.svg";


const dataBase = [
    {
        language: "kz",
        label: "Біз туралы",
        title: "Қара Ертіс",
        subTitle: "шаруа қожалығы",
        description: "'Қара Ертіс' шаруа қожалығы 1996 жылы ұйымдастырды. Шығыс Қазақстан облысы Зайсан ауданында ең алғашқы болып қазақтың жартылай қылшық жүнді 'Байыс' асыл тұқымды қойларын , 'Жабы' жылқыларын  әкелді.",
        textLabel: "Қазіргі таңда",
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
    }
]
const About = () => {
    const data = dataBase[0];
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
                        </div>
                        <p className={styles.contentCenter}>{data.description}</p>
                        <div className={styles.contentBottom}>
                            <h5 className={styles.contentBottomTitle}>{data.textLabel}</h5>
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
