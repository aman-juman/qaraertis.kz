import Image from "next/image";
import styles from "./Product.module.scss";

import MeatIcon from "./meat.svg";
import SheepWoolIcon from "./sheepWool.svg";
import ScalesIcon from "./scales.svg";
import SheepHeadIcon from "./sheepHead.svg";
import SheepIcon from "./sheep.svg";
import Link from "next/link";
import {useState} from "react";
// import SheepImage from "./imageSheep.png";

const advantages = [
    {
        text: "Вкус мясо",
        icon: <MeatIcon />,
    },
    {
        text: "Шерсть",
        icon: <SheepWoolIcon />,
    },
    {
        text: "Масса кг",
        icon: <ScalesIcon />,
    },
    {
        text: "Порода",
        icon: <SheepHeadIcon />,
    },
];


const Product = ({data}) => {
    const isAdvantages = !!data.advantages;
    const [showMore, setShowMore] = useState(false);
    const toggleAdvantagesOpen = () => setShowMore(prev => !prev);

    const list = advantages.map((item, i) =>(
        <div key={i} className={styles.card}>
            {item.icon}
            <p className={styles.cardText}>{item.text}</p>
        </div>
    ));

    const advantagesList = isAdvantages && data.advantages.list.map((item, i) =>(
        <li key={i}>{item}</li>
    ));
    return (
        <div id={data.idName} className={styles.wrap}>
            <div className={styles.imgBlock}>
                <div className={styles.imgBlockBgYellow}></div>
                <div className={styles.imgBlockBgGreen}></div>
                <div className={styles.img}>
                    <Image loading="lazy" placeholder="blur" width={500} alt={data.idName} src={data.image} />
                </div>
            </div>

            <div className={styles.contentBlock}>
                <div className={styles.contentBlockTop}>
                    {data.label}
                </div>
                <div className={styles.contentBlockCenter}>
                    <h3 className={styles.contentTitle}>
                        <a href={`https://wa.me/77051860084?text=Меня%20интересует%20племенные%20${data.title}`}>
                            {data.title}
                        </a>

                    </h3>
                    <p className={styles.contentDescription}>
                        {data.description}
                    </p>
                </div>
                <div className={styles.contentBlockBottom}>
                    <p className={styles.contentBlockBottomTitle}>Преимущества:</p>
                    <ul className={styles.contentBlockBottomList}>
                        {list}
                    </ul>
                    {
                        data.advantages ?
                        <div className={styles.additionalText}>
                            <h5>{data.advantages.title}</h5>
                            <p>{data.advantages.listTitle}</p>
                            <ol>{advantagesList}</ol>
                        </div>
                            : null
                    }
                </div>
            </div>
        </div>
    );
};


export default Product;
