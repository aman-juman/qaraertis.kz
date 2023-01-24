import styles from "./Products.module.scss";
import Product from "@/components/products/product/Product";

import SheepImage from "/public/sheepImg.jpeg";
import HorseImage from "/public/horseImg1.jpg";
import CowImage from "/public/cowImg1.jpg";




const data =[
    {
        language: "ru",
        idName: "sheep",
        label: "ЗНАМЕНИТАЯ ПОРОДА ОВЕЦ",
        title: "БАЙЫС",
        description: "Новая казахская курдючная полугрубошерстная порода типа «Байыс» была апробирована в 1994 году.",
        image: SheepImage,
        advantages: {
            title: 'Дүние жүзінің 170- тен аса елінде 650- дей қой тұқымдары мен тұқымдық топтары бар. Соның бірі "Қара Ертіс" шаруа қожалығында өсірілетін тұқымды "Байыс" қойлары.',
            listTitle: "Оның ерекшеліктері:",
            list: [
                "Жайылымда ақселеу тікен шөбі жабыспайды және етіне кірмейді.",
                "Терісі жеңіл, жылы, шыдамды.",
                "Жүннің ұзындығы 30-35 см.",
                "Қыста тебінімен жайылып шығады.",
                "Терісінен тон,дубленка, қозысының терісінен лама жаға жасауға болады.",
                "Қошқардың тірідей салмағы 170-180 кг.",
                "Саулығының тірідей салмағы 75-80 кг.",
                "Жүні ақ киіз басуға кілем өндірісіне пайдалануға лайық.",
                "Қозысы тез жетіледі 3,5 айда - 24 кг ет береді.",
                "Жаздың ыстығына, қыстың суығына төзімді келеді."
            ]
        }
    },
    {
        language: "ru",
        idName: "horse",
        label: "ЗНАМЕНИТАЯ ПОРОДА ЛОШАДЕЙ",
        title: "ЖАБЫ",
        description: "Одна из старейших пород казахских лошадей, самые крупные представители казахской породы",
        image: HorseImage,
    },
    {
        language: "ru",
        idName: "cow",
        label: "ЗНАМЕНИТАЯ ПОРОДА КОРОВ",
        title: "БЕЛОГОЛОВАЯ",
        description: "Это символ мясного животноводства Казахстана и широко распространена на территории нашей страны",
        image: CowImage,
    },
];
const Products = () => {
    const list = data.map((item, i) => (
        <Product key={i} data = {item} />
    ))
    return (
        <section className={styles.section}>
            <div className="container">
                {list}
            </div>
        </section>
    );
};

export default Products;
