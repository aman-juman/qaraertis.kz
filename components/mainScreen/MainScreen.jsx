import styles from "./MainScreen.module.scss";
import Carousel from "@/components/mainScreen/swiper/Carousel";
const MainScreen = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <Carousel />
            </div>
        </section>
    );
};

export default MainScreen;
