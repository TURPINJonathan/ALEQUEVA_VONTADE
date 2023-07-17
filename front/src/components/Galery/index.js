import BgImg from "@pictures/about.jpg";
import { useTranslation } from "react-i18next";
import { Gallery } from "react-grid-gallery";

import Relaxation from "@galery/relaxation.jpg";
import Acostage from "@galery/acostage.jpg";
import Contemplation from "@galery/contemplation.jpg";
import Conviviality from "@galery/conviviality.jpg";
import Discovery from "@galery/discovery.jpg";
import Escape from "@galery/escape.jpg";
import Immensity from "@galery/immensity.jpg";
import MadeToMesure from "@galery/made_to_mesure.jpg";
import Marina from "@galery/marina.jpg";
import Romantic from "@galery/romantic.jpg";
import Sunset from "@galery/sunset.jpg";
import Swimming from "@galery/swimming.jpg";

const Galery = () => {
  const { t } = useTranslation();

  const pictures = [
    {
      id: 1,
      src: Relaxation,
      caption: t("galery.title.relaxation"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.relaxation")}</div>
        </div>
      ),
      alt: t("galery.description.relaxation"),
      key: "relaxation",
      width: 623,
      height: 831,
    },
    {
      id: 2,
      src: Discovery,
      caption: t("galery.title.discovery"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.discovery")}</div>
        </div>
      ),
      alt: t("galery.description.discovery"),
      key: "discovery",
      width: 320,
      height: 400,
    },
    {
      id: 3,
      src: Acostage,
      caption: t("galery.title.acostage"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.acostage")}</div>
        </div>
      ),
      alt: t("galery.description.acostage"),
      key: "acostage",
      width: 320,
      height: 400,
    },
    {
      id: 4,
      src: Escape,
      caption: t("galery.title.escape"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.escape")}</div>
        </div>
      ),
      alt: t("galery.description.escape"),
      key: "escape",
      width: 320,
      height: 400,
    },
    {
      id: 5,
      src: Sunset,
      caption: t("galery.title.sunset"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.sunset")}</div>
        </div>
      ),
      alt: t("galery.description.sunset"),
      key: "sunset",
      width: 320,
      height: 400,
    },
    {
      id: 9,
      src: Contemplation,
      caption: t("galery.title.contemplation"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.contemplation")}</div>
        </div>
      ),
      alt: t("galery.description.contemplation"),
      key: "contemplation",
    },
    {
      id: 6,
      src: Marina,
      caption: t("galery.title.marina"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.marina")}</div>
        </div>
      ),
      alt: t("galery.description.marina"),
      key: "marina",
    },
    {
      id: 7,
      src: Romantic,
      caption: t("galery.title.romantic"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.romantic")}</div>
        </div>
      ),
      alt: t("galery.description.romantic"),
      key: "romantic",
    },
    {
      id: 8,
      src: Swimming,
      caption: t("galery.title.swimming"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.swimming")}</div>
        </div>
      ),
      alt: t("galery.description.swimming"),
      key: "swimming",
    },
    {
      id: 10,
      src: Immensity,
      caption: t("galery.title.immensity"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.immensity")}</div>
        </div>
      ),
      alt: t("galery.description.immensity"),
      key: "immensity",
    },
    {
      id: 11,
      src: Conviviality,
      caption: t("galery.title.conviviality"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.conviviality")}</div>
        </div>
      ),
      alt: t("galery.description.conviviality"),
      key: "conviviality",
    },
    {
      id: 12,
      src: MadeToMesure,
      caption: t("galery.title.made_to_mesure"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("galery.title.made_to_mesure")}</div>
        </div>
      ),
      alt: t("galery.description.made_to_mesure"),
      key: "made_to_mesure",
    },
  ];

  return (
    <main id="galery" style={{ backgroundImage: `url(${BgImg})` }}>
      <div className="galery_container">
        <Gallery
          className="gallery"
          images={pictures}
          enableImageSelection={false}
          rowHeight="250px"
        />
      </div>
    </main>
  );
};
export default Galery;
