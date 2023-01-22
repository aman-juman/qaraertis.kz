import styles from "./Products.module.scss";
import Product from "@/components/products/product/Product";

import SheepImage from "/public/sheepImg1.jpeg";
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
