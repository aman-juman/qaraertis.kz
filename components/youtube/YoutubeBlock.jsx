// import React from 'react'
// import ReactPlayer from 'react-player/youtube'
//
// import styles from "./YoutubeBlock.module.scss";
//
// // Only loads the YouTube player
// export default function YoutubeBlock() {
//     return (
//         <div className='container'>
//             <ReactPlayer
//                 url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
//                 volume={1}
//                 playing
//                 width="100%"
//                 height="500px"
//                 controls={true}
//                 className={styles.player}
//             />
//         </div>
//     )
// }



import React, { useEffect } from "react";
import Youtube from "react-youtube";
import YTPlayer from "react-youtube-player";

import styles from "./YoutubeBlock.module.scss";

export default function YoutubeBlock() {
    useEffect(() => {
        // Load the IFrame Player API code asynchronously.
    }, []);
    const options = {
        playerVars: {
            showinfo: 0,
            // controls: 0,
            rel: 0,
            height: '390',
            width: '640',
        }
    };
    return (
        <div className="container">
           <div className={styles.wrap}>
               {/*<h1>This will be </h1>*/}
               {/*<YTPlayer*/}
               {/*    className={styles.player}*/}
               {/*    videoId={"YWh2PMzPI9Q"}*/}
               {/*    width="100%"*/}
               {/*                    height="500px"*/}
               {/*    opts={options} // defaults -> null*/}
               {/*/>*/}
               <Youtube
                   className={styles.player}
                   videoId={"ntYMdao1G-E"}
                   opts={options} // defaults -> null
               />
               <Youtube
                   className={styles.player}
                   videoId={"YWh2PMzPI9Q"}
                   opts={options} // defaults -> null
               />
               <Youtube
                   className={styles.player}
                   videoId={"fCVRHzFT9SI"}
                   opts={options} // defaults -> null
               />
               {/*<h2>Start editing to see some magic happen!</h2>*/}
           </div>
        </div>
    );
}