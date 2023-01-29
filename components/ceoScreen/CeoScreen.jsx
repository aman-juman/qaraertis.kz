import styles from "./CeoScreen.module.scss";
import Image from "next/image";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import certificate from "./certificate.jpeg";
const CeoScreen = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.list}>
                    <Card img={img1} fullName="Карыбаев Женисбек " position="руководитель Крестьянского Хозяйство" />
                    <Card img={img2} fullName="Карыбаев Кайыр Женисбекулы" position="Заместитель руководителя Крестьянского Хозяйство" />
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
