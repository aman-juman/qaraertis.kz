import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Carousel.module.scss";
import img1 from "../background.jpeg";
import img2 from "../background1.jpg";
import img3 from "../background2.jpg";
import FarmIcon from "./farmIcon.svg";
import Arrow from "./arrow.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";


const animals = ["СКОТЫ", "ОВЦЫ", "ЛОШАДИ"]
const Carousel = () => {
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
                            src={img1} />


                    </div>
                </SwiperSlide>
                <div className={styles.top}>
                    <div className={styles.topContent}>
                        <h3 className={styles.topContentTitle}>Породистые</h3>

                        <ul className={styles.topContentList}>
                            {animals.map((item, i) => (
                                <li key={i}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <MyButton />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <FarmIcon />
                        <div className={styles.bottomText}>
                           <h1>Кара Ертис</h1>
                            <h5>основан 1996</h5>
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    );
};


const MyButton = () =>{
    return(
        <Link href="https://wa.me/77058110947?text=Меня%20интересует%20породистые%20овцы/лошади/скоты">
            <div className={styles.myButton}>
                <p>Узнать больше</p>

                <div className={styles.arrowBlock}>
                    <Arrow />
                </div>
            </div>
        </Link>
    )
}
export default Carousel;
