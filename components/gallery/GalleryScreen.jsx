import { useState } from "react";
import styles from "./Gallery.module.scss";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images } from "./images";

const GalleryScreen = () =>{
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.center}>
                    <Gallery
                        images={images}
                        onClick={handleClick}
                        enableImageSelection={false}
                    />
                    {!!currentImage && (
                        /* @ts-ignore */
                        <Lightbox
                            mainSrc={currentImage.original}
                            imageTitle={currentImage.caption}
                            mainSrcThumbnail={currentImage.src}
                            nextSrc={nextImage.original}
                            nextSrcThumbnail={nextImage.src}
                            prevSrc={prevImage.original}
                            prevSrcThumbnail={prevImage.src}
                            onCloseRequest={handleClose}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default GalleryScreen;
