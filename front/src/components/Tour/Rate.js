import { useTranslation } from "react-i18next";
import useResponsive from "@hooks/useResponsive";

const Rate = ({
  fromPrice,
  picture,
  pictureDescription,
  isMainCard = false,
  tourType, // discover tour; etc
  tourSubType, // private tour, etc
  duration,
  itineraryTour,
  fromToTour,
  prices = null,
  isPrices = true,
  included,
  special = null,
}) => {
  const { t } = useTranslation();
  const isScreenToDisplay = useResponsive(850);

  return (
    <article className="card card_border" id={isMainCard ? "tour_first" : ""}>
      {!isPrices ||
        (!isScreenToDisplay && (
          <span className="tour_fromPrice">{fromPrice}</span>
        ))}
      {!isScreenToDisplay && (
        <img className="tour_picture" src={picture} alt={pictureDescription} />
      )}

      <div className={`tour_type ${!isMainCard ? "tour_type-small" : ""}`}>
        <div
          className={`tour_type-content ${
            !isMainCard ? "tour_type-content--small" : ""
          }`}
        >
          <span>{tourType}</span>
        </div>
      </div>

      <div
        className={`tour_content card_background ${
          !isMainCard ? "tour_content-small" : ""
        }`}
      >
        {isMainCard ? (
          <h1 className="tour_content-title">
            {tourSubType}
            {duration !== null && (
              <span className="duration">({duration})</span>
            )}
          </h1>
        ) : (
          <h2 className="tour_content-title tour_content-title--small">
            {tourSubType}
            {duration !== null && (
              <span className="duration">({duration})</span>
            )}
          </h2>
        )}

        <span>{itineraryTour}</span>

        <span>{fromToTour}</span>

        {isPrices && prices !== null && prices.length > 0 ? (
          <table>
            <tbody>
              {prices.map((price, index) => (
                <tr key={index}>
                  <td>
                    {price.personCount} {t("tour.guests")}
                  </td>
                  <td>{price.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          isMainCard && (
            <table>
              <tbody>
                <tr>
                  <td>2 {t("tour.guests")}</td>
                  <td>80 €</td>
                </tr>
                <tr>
                  <td>4 {t("tour.guests")}</td>
                  <td>100 €</td>
                </tr>
                <tr>
                  <td>6 {t("tour.guests")}</td>
                  <td>120 €</td>
                </tr>
                <tr>
                  <td>8 {t("tour.guests")}</td>
                  <td>140 €</td>
                </tr>
              </tbody>
            </table>
          )
        )}

        <small>
          <span>{included}</span>
          {special && <span>&nbsp;|&nbsp;{special}</span>}
        </small>
      </div>
    </article>
  );
};

export default Rate;
