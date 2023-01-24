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
      <Head>
        <title>Кара Ертис</title>
        <meta name="description" content="Крестьянское хозяйство" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link
                      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lobster&family=Montserrat+Alternates:wght@400;500;600;700&family=Montserrat:wght@400;500;700&display=swap"
                      rel="stylesheet" />
      </Head>
        <div className="burger-menu">
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
        <Header />
      <MainScreen />
        <Products />
        <About />
        {/*<YoutubeBlock />*/}
        <CallOrder />
        <Advantage />
        <Footer />
        <PanelBottom />

    </LanguageContext.Provider>
  )
}
