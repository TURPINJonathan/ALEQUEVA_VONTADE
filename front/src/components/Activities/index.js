import React from "react";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";

// PICTURES
import Country from "@pictures/activities/country.png";
import Evora from "@pictures/activities/evora.jpg";
import Monsaraz from "@pictures/activities/monsaraz.jpg";
import AldeiaDaLuz from "@pictures/activities/aldeia_da_luz.png";
import Portel from "@pictures/activities/portel.jpg";
import Beach from "@pictures/activities/beach.jpg";
import Museum from "@pictures/activities/museum.jpg";
import DarkSky from "@pictures/activities/dark_sky.png";
import AlquevaPredatorFishing from "@pictures/activities/alqueva_predator_fishing.png";
import Moura from "@pictures/activities/moura.jpg";

const Activities = () => {
  const { t } = useTranslation();

  const activities = [
    {
      name: "main",
      title: t("activities.main.title"),
      content: [
        t("activities.main.content.first"),
        t("activities.main.content.second"),
      ],
      picture: Country,
      pictureDescription: t("activities.main.picture_description"),
      direction: "right",
    },
    {
      name: "evora",
      title: t("activities.evora.title"),
      content: [
        t("activities.evora.content.first"),
        t("activities.evora.content.second"),
        t("activities.evora.content.third"),
        t("activities.evora.content.fourth"),
        t("activities.evora.content.fifth"),
        t("activities.evora.content.sixth"),
      ],
      picture: Evora,
      pictureDescription: t("activities.evora.picture_description"),
      direction: "left",
    },
    {
      name: "monsaraz",
      title: t("activities.monsaraz.title"),
      content: [
        t("activities.monsaraz.content.first"),
        t("activities.monsaraz.content.second"),
        t("activities.monsaraz.content.third"),
        t("activities.monsaraz.content.fourth"),
        t("activities.monsaraz.content.fifth"),
      ],
      picture: Monsaraz,
      pictureDescription: t("activities.monsaraz.picture_description"),
      direction: "right",
    },
    {
      name: "aldeia_da_luz",
      title: t("activities.aldeia_da_luz.title"),
      content: [
        t("activities.aldeia_da_luz.content.first"),
        t("activities.aldeia_da_luz.content.second"),
        t("activities.aldeia_da_luz.content.third"),
        t("activities.aldeia_da_luz.content.fourth"),
      ],
      picture: AldeiaDaLuz,
      pictureDescription: t("activities.aldeia_da_luz.picture_description"),
      direction: "left",
    },
    {
      name: "portel",
      title: t("activities.portel.title"),
      content: [
        t("activities.portel.content.first"),
        t("activities.portel.content.second"),
        t("activities.portel.content.third"),
        t("activities.portel.content.fourth"),
      ],
      picture: Portel,
      pictureDescription: t("activities.portel.picture_description"),
      direction: "right",
      website: "https://www.ville-leportel.fr/",
    },,
    {
      name: "moura",
      title: t("activities.moura.title"),
      content: [
        t("activities.moura.content.first"),
        t("activities.moura.content.second"),
        t("activities.moura.content.third"),
      ],
      picture: Moura,
      pictureDescription: t("activities.moura.picture_description"),
      direction: "left",
    },
    {
      name: "beach",
      title: t("activities.beach.title"),
      content: [
        t("activities.beach.content.first"),
        t("activities.beach.content.second"),
        t("activities.beach.content.third"),
        t("activities.beach.content.fourth"),
        t("activities.beach.content.fifth"),
        t("activities.beach.content.sixth"),
      ],
      picture: Beach,
      pictureDescription: t("activities.beach.picture_description"),
      direction: "right",
    },
    {
      name: "fishing",
      title: t("activities.fishing.title"),
      content: [
        t("activities.fishing.content.first"),
        t("activities.fishing.content.second"),
        t("activities.fishing.content.third"),
      ],
      picture: AlquevaPredatorFishing,
      pictureDescription: t("activities.fishing.picture_description"),
      direction: "left",
      website: "https://alqueva-predator-fishing.com/",
    },
    {
      name: "museum",
      title: t("activities.museum.title"),
      content: [
        t("activities.museum.content.first"),
        t("activities.museum.content.second"),
        t("activities.museum.content.third"),
        t("activities.museum.content.fourth"),
        t("activities.museum.content.fifth"),
        t("activities.museum.content.sixth"),
      ],
      picture: Museum,
      pictureDescription: t("activities.museum.picture_description"),
      direction: "right",
      website: "https://www.museudomedronho.pt/",
    },
    {
      name: "dark_sky",
      title: t("activities.dark_sky.title"),
      content: [
        t("activities.dark_sky.content.first"),
        t("activities.dark_sky.content.second"),
        t("activities.dark_sky.content.third"),
      ],
      picture: DarkSky,
      pictureDescription: t("activities.dark_sky.picture_description"),
      direction: "left",
      website: "https://darkskyalqueva.com/",
    },
  ];

  return (
    <main id="activities" style={{ backgroundImage: `url(${BgImg})` }}>
      <div id="activities_container">
        {activities.map((activitie, index) => (
          <div key={index} className="activities_element card_border">
            <div
              className={`inside_element card_background ${
                activitie.direction === "left" ? "picture_left" : ""
              }`}
            >
              <div className="element_content">
                {activitie.name === "main" ? (
                  <h1>{activitie.title}</h1>
                ) : (
                  <h2>{activitie.title}</h2>
                )}
                <div>
                  {activitie.content.map((content, index) => (
                    <p key={index}>{content}</p>
                  ))}
                </div>
                {activitie.website && (
                  <p>
                    <a
                      href={activitie.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{t("activities.website")}</span>
                      <span>{activitie.title}</span>
                    </a>
                  </p>
                )}
              </div>
              <img src={activitie.picture} alt={activitie.pictureDescription} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Activities;
