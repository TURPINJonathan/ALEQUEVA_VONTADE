import React, { useState } from "react";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import ActivitiesAround from "@components/Activities/activitiesAround";
import Eat from "@components/Eat";
import { activities, restaurants } from "@data";

const Activities = () => {
  const { t } = useTranslation();

  const [activity, setActivity] = useState(true);
  const [eat, setEat] = useState(false);
  const [sleep, setSleep] = useState(false);

  const handleActivityClick = () => {
    setActivity(true);
    setEat(false);
    setSleep(false);
  };

  const handleEatClick = () => {
    setActivity(false);
    setEat(true);
    setSleep(false);
  };

  const handleSleepClick = () => {
    setActivity(false);
    setEat(false);
    setSleep(true);
  };

  console.log('activites', activities);
  console.log('restaurants', restaurants);

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
      <section id="activities_container-nav">
        {activity ? (
          <div onClick={handleActivityClick} className="nav_active">
          {t("nav.doing")}
        </div>
        ) : (
          <div onClick={handleActivityClick}>
          {t("nav.doing")}
        </div>
        )}
        {sleep ? (
        <div onClick={handleSleepClick} className="nav_active">
          {t("nav.sleeping")}
        </div>
        ) : (
          <div onClick={handleSleepClick}>
            {t("nav.sleeping")}
          </div>
        )}
        {eat ? (
        <div onClick={handleEatClick} className="nav_active">
          {t("nav.eat")}
        </div>
        ) : (
        <div onClick={handleEatClick}>
          {t("nav.eat")}
        </div>
        )}
      </section>

      {activity && (
        <ActivitiesAround data={activities} />
      )}

      {eat && (
        <ActivitiesAround data={restaurants} />
      )}

      {sleep && (
        <ActivitiesAround data={restaurants} />
      )}

      {/* <section id="activities_container">
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
      </section> */}
    </main>
  );
};

export default Activities;
