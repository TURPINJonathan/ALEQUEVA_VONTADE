import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import ActivitiesAround from "@components/Activities/activitiesAround";
import { activities, restaurants, sleeps } from "@data";

const Activities = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang); // Définissez la langue dans i18next
    }
  }, [lang, i18n]);

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
        <ActivitiesAround data={sleeps} />
      )}
    </main>
  );
};

export default Activities;
