import React, { useEffect, useState } from "react";
import BgImg from "@pictures/about.jpg";
import { useTranslation } from "react-i18next";
import { Gallery } from "react-grid-gallery";
import ImageFullScreen from "@components/PictureGallery/PictureFullScreen";
import { pictures as Pictures } from "@data";
import { Helmet } from "react-helmet";

const PictureGallery = () => {
  const { t } = useTranslation();

  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [shuffledPictures, setShuffledPictures] = useState([]);

  useEffect(() => {
    const shuffledArray = shuffleArray(Pictures);
    setShuffledPictures(shuffledArray);
  }, []);

  /**
   * Event click on picture => open picture on fullscreen with overlay
   * @param {number} index 
   */
  const handleImageClick = (index) => {
    setFullscreenImage(Pictures[index]);
  };

  /**
   * Close picture fullscreen mode
   */
  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  /**
   * Set picture with description and title translate
   * @param {object} picture 
   * @returns picture
   */
  const translateImageInfo = (image) => ({
    ...image,
    alt: t(image.alt),
    title: t(image.caption),
  });
  
  /**
   * Random display of de pictures
   * @param {Pictures} array 
   * @returns New sort of Pictures array
   */
  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <main id="gallery" style={{ backgroundImage: `url(${BgImg})` }}>
    <Helmet>
      <title>{t("meta.gallery.title")}</title>
      <meta property="og:title" content={t("meta.gallery.title")} />
      <meta name="description" content={t("meta.gallery.description")} />
      <meta property="og:description" content={t("meta.gallery.description")} />
      <meta name="keyword" content={t("meta.gallery.keywords")} />
      <meta name="twitter:title" content={t("meta.gallery.title")} />
      <meta
        name="twitter:description"
        content={t("meta.gallery.description")}
      />
    </Helmet>
      <div className="gallery_container">
        <Gallery
          images={shuffledPictures.map(translateImageInfo)}
          enableImageSelection={false}
          rowHeight="250px"
          onClick={(index) => handleImageClick(index)}
        />
      </div>

      {fullscreenImage && (
        <ImageFullScreen
          image={fullscreenImage.src}
          description={translateImageInfo(fullscreenImage).alt}
          onClose={closeFullscreenImage}
          title={translateImageInfo(fullscreenImage).title}
        />
      )}
    </main>
  );
};

export default PictureGallery;
