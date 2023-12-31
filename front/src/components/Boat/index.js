import React, { useEffect } from "react";
import { useParams } from "react-router";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";
import HoverableElement from "@utils/gridPicture";
import { Helmet } from "react-helmet";

// Picture
import Welcome from "@gallery/marina.jpg";
import Sunshade from "@gallery/inside_boat-crop.jpg";
import ChangeRoom from "@gallery/boat.jpg";
import FrontDoor from "@pictures/boat.jpg";

const Boat = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang); // Définissez la langue dans i18next
    }
  }, [lang, i18n]);

  return (
    <main id="boat" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.boat.title")}</title>
        <meta property="og:title" content={t("meta.boat.title")} />
        <meta name="description" content={t("meta.boat.description")} />
        <meta property="og:description" content={t("meta.boat.description")} />
        <meta name="keyword" content={t("meta.boat.keywords")} />
        <meta name="twitter:title" content={t("meta.boat.title")} />
        <meta
          name="twitter:description"
          content={t("meta.boat.description")}
        />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>
      <section id="boat_container">
        <HoverableElement
          title={t("boat.welcome.title")}
          content={t("boat.welcome.content")}
          pictureDescription={t("boat.welcome.alt")}
          picture={Welcome}
          element="boat_welcome"
        />
        <HoverableElement
          title={t("boat.sunshade.title")}
          pictureDescription={t("boat.sunshade.alt")}
          picture={Sunshade}
          element="boat_sunshade"
        />
        <HoverableElement
          title={t("boat.change_room.title")}
          pictureDescription={t("boat.change_room.alt")}
          picture={ChangeRoom}
          element="boat_change-room"
        />
        <HoverableElement
          title={t("boat.front_door.title")}
          pictureDescription={t("boat.front_door.alt")}
          picture={FrontDoor}
          element="boat_door"
        />
      </section>
    </main>
  );
};

export default Boat;
