import BgImg from "@pictures/about.jpg";
import { useTranslation } from "react-i18next";
import { Gallery } from "react-grid-gallery";

import Relaxation from "@gallery/relaxation.jpg";
import Acostage from "@gallery/acostage.jpg";
import Contemplation from "@gallery/contemplation.jpg";
import Conviviality from "@gallery/conviviality.jpg";
import Discovery from "@gallery/discovery.jpg";
import Escape from "@gallery/escape.jpg";
import Immensity from "@gallery/immensity.jpg";
import MadeToMesure from "@gallery/made_to_mesure.jpg";
import Marina from "@gallery/marina.jpg";
import Romantic from "@gallery/romantic.jpg";
import Sunset from "@gallery/sunset.jpg";
import Swimming from "@gallery/swimming.jpg";

const PictureGallery = () => {
  const { t } = useTranslation();

  const pictures = [
    {
      id: 1,
      src: Relaxation,
      caption: t("gallery.title.relaxation"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.relaxation")}</div>
        </div>
      ),
      alt: t("gallery.description.relaxation"),
      key: "relaxation",
      width: 623,
      height: 831,
    },
    {
      id: 2,
      src: Discovery,
      caption: t("gallery.title.discovery"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.discovery")}</div>
        </div>
      ),
      alt: t("gallery.description.discovery"),
      key: "discovery",
      width: 320,
      height: 400,
    },
    {
      id: 3,
      src: Acostage,
      caption: t("gallery.title.acostage"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.acostage")}</div>
        </div>
      ),
      alt: t("gallery.description.acostage"),
      key: "acostage",
      width: 320,
      height: 400,
    },
    {
      id: 4,
      src: Escape,
      caption: t("gallery.title.escape"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.escape")}</div>
        </div>
      ),
      alt: t("gallery.description.escape"),
      key: "escape",
      width: 320,
      height: 400,
    },
    {
      id: 5,
      src: Sunset,
      caption: t("gallery.title.sunset"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.sunset")}</div>
        </div>
      ),
      alt: t("gallery.description.sunset"),
      key: "sunset",
      width: 320,
      height: 400,
    },
    {
      id: 9,
      src: Contemplation,
      caption: t("gallery.title.contemplation"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.contemplation")}</div>
        </div>
      ),
      alt: t("gallery.description.contemplation"),
      key: "contemplation",
    },
    {
      id: 6,
      src: Marina,
      caption: t("gallery.title.marina"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.marina")}</div>
        </div>
      ),
      alt: t("gallery.description.marina"),
      key: "marina",
    },
    {
      id: 7,
      src: Romantic,
      caption: t("gallery.title.romantic"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.romantic")}</div>
        </div>
      ),
      alt: t("gallery.description.romantic"),
      key: "romantic",
    },
    {
      id: 8,
      src: Swimming,
      caption: t("gallery.title.swimming"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.swimming")}</div>
        </div>
      ),
      alt: t("gallery.description.swimming"),
      key: "swimming",
    },
    {
      id: 10,
      src: Immensity,
      caption: t("gallery.title.immensity"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.immensity")}</div>
        </div>
      ),
      alt: t("gallery.description.immensity"),
      key: "immensity",
    },
    {
      id: 11,
      src: Conviviality,
      caption: t("gallery.title.conviviality"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.conviviality")}</div>
        </div>
      ),
      alt: t("gallery.description.conviviality"),
      key: "conviviality",
    },
    {
      id: 12,
      src: MadeToMesure,
      caption: t("gallery.title.made_to_mesure"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.made_to_mesure")}</div>
        </div>
      ),
      alt: t("gallery.description.made_to_mesure"),
      key: "made_to_mesure",
    },
  ];

  return (
    <main id="gallery" style={{ backgroundImage: `url(${BgImg})` }}>
      <div className="galery_container">
        <Gallery
          images={pictures}
          enableImageSelection={false}
          rowHeight="250px"
        />
      </div>
    </main>
  );
};
export default PictureGallery;
