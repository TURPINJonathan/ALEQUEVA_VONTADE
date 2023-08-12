import React from "react";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import { activities } from "@data";

const Activities = () => {
  const { t } = useTranslation();

  return (
    <main id="activities" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.activities.title")}</title>
        <meta property="og:title" content={t("meta.activities.title")} />
        <meta name="description" content={t("meta.activities.description")} />
        <meta
          property="og:description"
          content={t("meta.activities.description")}
        />
        <meta name="keyword" content={t("meta.activities.keywords")} />
        <meta name="twitter:title" content={t("meta.activities.title")} />
        <meta
          name="twitter:description"
          content={t("meta.activities.description")}
        />
      </Helmet>
      <section id="activities_container">
        {activities.map((activitie, index) => (
          <article key={index} className="activities_element card_border">
            <div
              className={`inside_element card_background ${
                activitie.direction === "left" ? "picture_left" : ""
              }`}
            >
              <aside className="element_content">
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
              </aside>
              <img
                src={activitie.picture}
                alt={t(activitie.pictureDescription)}
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Activities;
