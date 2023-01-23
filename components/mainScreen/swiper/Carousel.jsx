import React, {useContext, useRef, useState} from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Carousel.module.scss";
import img1 from "/public/slide1.jpeg";
import img2 from "/public/slide2.jpeg";
import img3 from "/public/slide3.jpeg";
import img4 from "/public/slide4.jpeg";
import FarmIcon from "./farmIcon.svg";
import Arrow from "./arrow.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import {LanguageContext} from "@/pages";


const animals = ["СКОТЫ", "ОВЦЫ", "ЛОШАДИ"];

const dataBase = [
    {
        language: "ru",
        title: "ПЛЕМЕННЫЕ",
        products: [
            {
                name: "СКОТЫ",
                idName: "cow"
            },
            {
                name: "ОВЦЫ",
                idName: "sheep"
            },
            {
                name: "ЛОШАДИ",
                idName: "horse"
            },
        ],
        linkTitle: "Подробнее",
        sinceTitle: "ОСНОВАН"
    },
    {
        language: "kz",
        title: "Асыл тұқымды",
        products: [
            {
                name: "СИЫР",
                idName: "cow"
            },
            {
                name: "ҚОЙ",
                idName: "sheep"
            },
            {
                name: "ЖЫЛҚЫ",
                idName: "horse"
            },
        ],
        linkTitle: "Толығырақ",
        sinceTitle: "ҚҰРЫЛДЫ"
    },
]
const Carousel = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    const index = dataBase.findIndex(item => item.language === language);
    const data = dataBase[index];
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                loop={true}
            >
                <SwiperSlide>
                    <div className={styles.block}>
                        <Image
                            className={styles.img}
                            paceholder="blur"
                            alt="farm"
                            quality={80}
                            loading="lazy"
                            src={img1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.block}>
                        <Image
                            className={styles.img}
                            paceholder="blur"
                            alt="farm"
                            quality={80}
                            loading="lazy"
                            src={img2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.block}>
                        <Image
                            className={styles.img}
                            paceholder="blur"
                            alt="farm"
                            quality={80}
                            loading="lazy"
                            src={img3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.block}>
                        <Image
                            className={styles.img}
                            paceholder="blur"
                            alt="farm"
                            quality={80}
                            loading="lazy"
                            src={img4} />
                    </div>
                </SwiperSlide>
                <div className={styles.top}>
                    <div className={styles.topContent}>
                        <h3 className={styles.topContentTitle}>{data.title}</h3>

                        <ul className={styles.topContentList}>
                            {data.products.map((item, i) => (
                                <li key={i}>
                                    <Link href={`#${item.idName}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <MyButton title={data.linkTitle} />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <FarmIcon />
                        <div className={styles.bottomText}>
                           <h1>Қара Ертіс</h1>
                            <h5>{data.sinceTitle} 1996</h5>
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    );
};


const MyButton = ({title}) =>{
    return(
        <Link href="https://wa.me/77058110947?text=Меня%20интересует%20породистые%20овцы/лошади/скоты">
            <div className={styles.myButton}>
                <p>{title}</p>

                <div className={styles.arrowBlock}>
                    <Arrow />
                </div>
            </div>
        </Link>
    )
}
export default Carousel;
