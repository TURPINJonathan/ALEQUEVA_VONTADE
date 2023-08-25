import React, { useEffect, useState } from "react";
import BgImg from "@pictures/about.jpg";
import { useTranslation } from "react-i18next";
import ImageFullScreen from "@components/PictureGallery/PictureFullScreen";
import { pictures as Pictures } from "@data";
import { Helmet } from "react-helmet";

const PictureGallery = () => {
  const { t } = useTranslation();

  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [shuffledPictures, setShuffledPictures] = useState([]);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);

  useEffect(() => {
    const shuffledArray = shuffleArray(Pictures);
    setShuffledPictures(shuffledArray);
  }, []);

  /**
   * Event click on picture => open picture on fullscreen with overlay
   * @param {number} index
   */
  const handleImageClick = (currentSRC, currentIndex) => {
    const currentPicture = Pictures.find(
      (picture) => picture.src === currentSRC
    );
    setFullscreenImageIndex(currentIndex);
    setFullscreenImage(currentPicture);
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
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  /**
   * Switch to the previous picture when full screen mode
   */
  const handlePrevImage = () => {
    const prevIndex =
      (fullscreenImageIndex - 1 + shuffledPictures.length) %
      shuffledPictures.length;
    if (prevIndex >= 0 && prevIndex < shuffledPictures.length) {
      handleImageClick(shuffledPictures[prevIndex].src, prevIndex);
    }
  };

  /**
   * Switch to the next picture when full screen mode
   */
  const handleNextImage = () => {
    const nextIndex = (fullscreenImageIndex + 1) % shuffledPictures.length;
    if (nextIndex >= 0 && nextIndex < shuffledPictures.length) {
      handleImageClick(shuffledPictures[nextIndex].src, nextIndex);
    }
  };

  return (
    <main id="gallery" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.gallery.title")}</title>
        <meta property="og:title" content={t("meta.gallery.title")} />
        <meta name="description" content={t("meta.gallery.description")} />
        <meta
          property="og:description"
          content={t("meta.gallery.description")}
        />
        <meta name="keyword" content={t("meta.gallery.keywords")} />
        <meta name="twitter:title" content={t("meta.gallery.title")} />
        <meta
          name="twitter:description"
          content={t("meta.gallery.description")}
        />
      </Helmet>
      <section className="gallery_container">
        {shuffledPictures.map((picture, index) => picture.isActive && (
          <img
            src={picture.src}
            alt={picture.alt}
            key={index}
            onClick={() => handleImageClick(picture.src, index)}
          />
        ))}
      </section>

      {fullscreenImage && (
        <ImageFullScreen
          image={fullscreenImage.src}
          description={translateImageInfo(fullscreenImage).alt}
          onClose={closeFullscreenImage}
          title={translateImageInfo(fullscreenImage).title}
          onPrevClick={handlePrevImage}
          onNextClick={handleNextImage}
        />
      )}
    </main>
  );
};

export default PictureGallery;
