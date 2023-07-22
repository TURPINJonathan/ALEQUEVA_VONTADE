import React from "react";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";

import { activities } from "@data";

const Activities = () => {
  const { t } = useTranslation();

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
                  <h1>{t(activitie.title)}</h1>
                ) : (
                  <h2>{t(activitie.title)}</h2>
                )}
                <div>
                  {activitie.content.map((content, index) => (
                    <p key={index}>{t(content)}</p>
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
                      <span>{t(activitie.title)}</span>
                    </a>
                  </p>
                )}
              </div>
              <img
                src={activitie.picture}
                alt={t(activitie.pictureDescription)}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Activities;
