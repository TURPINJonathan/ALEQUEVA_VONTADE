import React from "react";
import BgImg from "@gallery/swimming.jpg";
import { useTranslation } from "react-i18next";

import { rates } from "@data";
import HourAndHalfPicture from "@pictures/tours/hour_and_half.jpg";

import Rate from "@components/Tour/Rate";

const Tour = () => {
  const { t } = useTranslation();

  return (
    <main id="tour" style={{ backgroundImage: `url(${BgImg})` }}>
      <div id="tour_container">
        <Rate
          id="tour_first"
          fromPrice={t("tour.hour_and_half.from_price")}
          picture={HourAndHalfPicture}
          isMainCard={true}
          tourType={t("tour.hour_and_half.tour_type")}
          tourSubType={t("tour.hour_and_half.tour_subtype")}
          duration={t("tour.hour_and_half.duration")}
          itineraryTour={t("tour.hour_and_half.itinerary_tour")}
          fromToTour={t("tour.hour_and_half.from_to_tour")}
					included={t("tour.hour_and_half.included")}
        />

        <div id="tour_second">
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
							special={t(rate.special) ?? null}
            />
          ))}
        </div>

				<div className="tour_precision">
					<small>{t("tour.precision")}</small>
				</div>
      </div>
    </main>
  );
};

export default Tour;
