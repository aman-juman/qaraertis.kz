import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/header/Header";
import Carousel from "@/components/mainScreen/swiper/Carousel";
import MainScreen from "@/components/mainScreen/MainScreen";
import Product from "@/components/products/product/Product";
import About from "@/components/about/About";
import Advantage from "@/components/advantage/Advantage";
import Footer from "@/components/footer/Footer";
import Products from "@/components/products/Products";
import CallOrder from "@/components/callOrder/CallOrder";
import Menu from "@/components/Menu";
import PanelBottom from "@/components/PanelBottom/PanelBottom";
import {createContext, useState} from "react";
import YoutubeBlock from "@/components/youtube/YoutubeBlock";
import WoolScreen from "@/components/woolScreen/WoolScreen";
import {SEO} from "@/components/layout/SEO";

const inter = Inter({ subsets: ['latin'] })


const languages = [
    "ru",
    "kz"
]
export const LanguageContext = createContext(languages[0]);
export default function Home() {
    const [language, setLanguage] = useState(languages[0]);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <SEO />
        <div className="burger-menu">
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
        <Header />
      <MainScreen />
        <Products />
        <About />
        <WoolScreen />

        <YoutubeBlock />
        <CallOrder />
        <Advantage />
        <Footer />
        <PanelBottom />

    </LanguageContext.Provider>
  )
}
