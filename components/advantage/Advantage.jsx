import styles from "./Advantage.module.scss";



const dataBase = [
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
    const data = dataBase[0];

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
        <section className={styles.section}>
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
