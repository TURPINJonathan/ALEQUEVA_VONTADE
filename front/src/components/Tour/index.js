import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import BgImg from "@gallery/swimming.jpg";

import { rates } from "@data";
import HourAndHalfPicture from "@pictures/tours/hour_and_half.jpg";

import Rate from "@components/Tour/Rate";

const Tour = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang); // Définissez la langue dans i18next
    }
  }, [lang, i18n]);

  return (
    <main id="tour" style={{ backgroundImage: `url(${BgImg})` }}>
    <Helmet>
      <title>{t("meta.tour.title")}</title>
      <meta property="og:title" content={t("meta.tour.title")} />
      <meta name="description" content={t("meta.tour.description")} />
      <meta property="og:description" content={t("meta.tour.description")} />
      <meta name="keyword" content={t("meta.tour.keywords")} />
      <meta name="twitter:title" content={t("meta.tour.title")} />
      <meta
        name="twitter:description"
        content={t("meta.tour.description")}
      />
    </Helmet>
      <section id="tour_container">
        <Rate
          id="tour_first"
          fromPrice={t("tour.hour_and_half.from_price")}
          picture={HourAndHalfPicture}
          pictureDescription={t("tour.hour_and_half.picture_description")}
          isMainCard={true}
          tourType={t("tour.hour_and_half.tour_type")}
          tourSubType={t("tour.hour_and_half.tour_subtype")}
          duration={t("tour.hour_and_half.duration")}
          itineraryTour={t("tour.hour_and_half.itinerary_tour")}
          fromToTour={t("tour.hour_and_half.from_to_tour")}
					included={t("tour.hour_and_half.included")}
        />

        <section id="tour_second">
          {rates.map((rate, index) => (
            <Rate
              key={index}
              fromPrice={t(`tour.${rate.tour}.from_price`)}
              picture={rate.picture}
              tourType={t(`tour.${rate.tour}.tour_type`)}
              tourSubType={t(`tour.${rate.tour}.tour_subtype`)}
              duration={
                rate.tour !== "private" ? t(`tour.${rate.tour}.duration`) : null
              }
              itineraryTour={t(`tour.${rate.tour}.itinerary_tour`)}
              fromToTour={t(`tour.${rate.tour}.from_to_tour`)}
              pictureDescription={t(`tour.${rate.tour}.picture_description`)}
              prices={rate.prices ?? []}
              isPrices={rate.isPrices}
							included={t(rate.included)}
							special={t(rate.special)}
            />
          ))}
        </section>

				<aside className="tour_precision">
					<small>{t("tour.precision")}</small>
				</aside>
      </section>
    </main>
  );
};

export default Tour;
