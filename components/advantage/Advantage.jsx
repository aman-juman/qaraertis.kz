import styles from "./Advantage.module.scss";
import {useContext} from "react";
import {LanguageContext} from "@/pages";



const dataBase = [
    {
        language: "ru",
        label: "Наши достижение",
        option: "год",
        advantages: [
            {
                year: 1996,
                title: 'Фермерское хозяйство «Кара Иртыс» первым завез в район овец «байыс» казахской полущетинной шерсти и лошадей породы «жабы». '
            },
            {
                year: 2003,
                title: 'Построил торговый дом «Кара Иртыс» в городе Зайсан и вносит свой вклад в развитие экономики района.'
            },
            {
                year: 2003,
                title: 'Награжден медалью «За доблестную службу».'
            },
            {
                year: 2003,
                title: 'Получил благодарственное письмо от акима Восточно-Казахстанской области.'
            },
            {
                year: 2007,
                title: 'Награжден почетной грамотой за высокие достижения в развитии овцеводства Фермерское хозяйство в честь профессионального праздника работников сельского хозяйства Департамента сельского хозяйства Восточно-Казахстанской области.'
            },
            {
                year: 2013,
                title: 'Награжден дипломом 2-й степени на выставке «Шыңғыстау -2013»'
            },
            {
                year: 2013,
                title: 'Победил в номинации акима Зайсанского района «Лучшее овцеводство».'
            },
            {
                year: 2014,
                title: 'Награжден дипломом 1-й степени на выставке «Шыңғыстау- 2014» и награжден кубками'
            },
        ]
    },
    {
        language: "kz",
        label: "Біздің жетістіктер",
        option: "жыл",
        advantages: [
            {
                year: 2003,
                title: '«Ерен еңбегі үшін» медалімен марапатталды.'
            },
            {
                year: 2003,
                title: 'Шығыс Қазақстан облыс әкімінің алғыс хатына ие болды.'
            },
            {
                year: 2007,
                title: 'ШҚО ауыл шаруашылығы департаментінің ауыл шаруашылығы еңбеккерлерінің кәсіби мерекесі құрметіне қой шаруашылығы саласын дамытудағы жоғары жетістіктері үшін  Құрмет грамотасымен марапатталды. '
            },
            {
                year: 2013,
                title: 'Шыңғыстау- 2013 көрмесінде 2-ші дәрежелі диплом'
            },
            {
                year: 2013,
                title: 'Зайсан ауданы әкімінің алғыс хаты'
            },
            {
                year: 2013,
                title: 'Зайсан ауданы әкімінің «Ең үздік қой шаруашылығы» номинациясы'
            },
            {
                year: 2014,
                title: 'Шыңғыстау- 2014 көрмесінде  1-ші дәрежелі диплом/кубок'
            },
        ]
    }
]
const Advantage = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const index = dataBase.findIndex(item => item.language === language);
    const data = dataBase[index];

    const list = data.advantages.map(({year, title}, i) => (
        <div className={styles.listItem} key={i}>
            <div className={styles.listItemLeftBlock}>
                <span className={styles.listItemLeftBlockTitle}>{year}</span>
                <span>{data.option}</span>
            </div>
            <div className={styles.listItemRightBlock}>
                <p className={styles.listItemRightBlockTitle}>{title}</p>
            </div>
        </div>
    ))
    return (
        <section id="advantages" className={styles.section}>
            <div className="container">
                <h5 className={styles.label}>{data.label}</h5>
                <div className={styles.list}>
                    {list}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
