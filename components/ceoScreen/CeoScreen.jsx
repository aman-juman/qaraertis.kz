import styles from "./CeoScreen.module.scss";
import Image from "next/image";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import certificate from "./certificate.jpeg";
import {useContext} from "react";
import {LanguageContext} from "@/pages";

const dataBase = [
    {
        language: "ru",
        content: [
            {
                name: "Карыбаев Женисбек",
                position: "руководитель Крестьянского Хозяйство"
            },
            {
                name: "Карыбаев Кайыр Женисбекулы",
                position: "Заместитель руководителя Крестьянского Хозяйство"
            }
        ]
    },
    {
        language: "kz",
        content: [
            {
                name: "Қарыбаев Жеңісбек",
                position: "Шаруа қожалық басшысы"
            },
            {
                name: "Қарыбаев Қайыр Жеңісбекұлы",
                position: "Шаруа қожалық басшысының орынбасары"
            }
        ]
    }
]
const CeoScreen = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const index = dataBase.findIndex(item => item.language === language);
    const data = dataBase[index].content;
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.list}>
                    {
                        data.map((person, i) =>(
                            <Card key={i} img={ (i+1 === 1) ? img1 : img2} fullName={person.name} position={person.position} />
                        ))
                    }
                </div>
                {/*<Image src={certificate}/>*/}
            </div>
        </section>
    );
};

export default CeoScreen;

const Card = ({img, position, fullName}) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}><Image loading="lazy" placeholder="blur" width={400} src={img} /></div>
            <div className={styles.content}>
                <h5 className={styles.name}>{fullName}</h5>
                <p className={styles.status}>{position}</p>
            </div>
        </div>
    );
};
