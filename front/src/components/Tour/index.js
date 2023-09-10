import React, { useEffect } from "react";
import { useParams } from "react-router";
import useResponsive from "@hooks/useResponsive";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import BgImg from "@gallery/swimming.jpg";

import { rates } from "@data";

const Tour = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const isMobile = useResponsive(850);

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang); // Définissez la langue dans i18next
    }
  }, [lang, i18n]);

  console.log(rates);

  return (
    <main id="tour" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.tour.title")}</title>
        <meta property="og:title" content={t("meta.tour.title")} />
        <meta name="description" content={t("meta.tour.description")} />
        <meta property="og:description" content={t("meta.tour.description")} />
        <meta name="keyword" content={t("meta.tour.keywords")} />
        <meta name="twitter:title" content={t("meta.tour.title")} />
        <meta name="twitter:description" content={t("meta.tour.description")} />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>

      <section id="tour_container">
        {rates.map((rate, key) => (
          <article key={key} className="card_border">
            <div
              className={`card_background tour_element ${
                rate.direction === "left" ? "picture_left" : ""
              }`}
            >
              <div
                className="tour_inside"
                style={
                  rate.tour === "private"
                    ? { justifyContent: "space-between" }
                    : {}
                }
              >
                <div className="tour_type">{t(rate.type)}</div>

                {rate.master ? (
                  <h1 className="tour_title">{t(rate.title)}</h1>
                ) : (
                  <h2 className="tour_title">{t(rate.title)}</h2>
                )}
                {rate.duration && (
                  <p className="tour_duration">({t(rate.duration)})</p>
                )}
                <p className="tour_content">{t(rate.itinerary)}</p>
                <p
                  className="tour_content"
                  style={
                    rate.tour === "private" ? { marginBottom: "1rem" } : {}
                  }
                >
                  {t(rate.timer)}
                </p>

                {rate.tour !== "private" && (
                  <p className="tour_price">
                    <span>
                      {rate.price} {t("tour.two_pax")}
                    </span>
                    <span>{t("tour.more_passengers")}</span>
                    <span>{t("tour.max_passengers")}</span>
                  </p>
                )}

                {rate.included && (
                  <p className="tour_included">{t(rate.included)}</p>
                )}
              </div>
              {!isMobile && (
                <img
                  className="tour_picture"
                  src={rate.picture}
                  alt={rate.pictureDescription}
                />
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Tour;
