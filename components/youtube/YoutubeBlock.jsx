import styles from "./YoutubeBlock.module.scss";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import {LanguageContext} from "@/pages";
import {useContext} from "react";


const dataBase = [
    {
        language: "ru",
        title: "Кара Ертис - крестьянское хозяйство"
    },
    {
        language: "kz",
        title: "Қара Ертіс - шаруа қожалығы"
    },
]
export default function YoutubeBlock() {
    const [language, setLanguage] = useContext(LanguageContext);
    const index = dataBase.findIndex(item => item.language === language);
    const data = dataBase[index]
    return (
        <div className="container">
           <div className={styles.wrap}>
              <h3 className={styles.title}>{data.title}</h3>

               <YoutubeEmbed  embedId="ntYMdao1G-E" />
               <YoutubeEmbed  embedId="YWh2PMzPI9Q" />
               <YoutubeEmbed  embedId="fCVRHzFT9SI" />
           </div>
        </div>
    );
}