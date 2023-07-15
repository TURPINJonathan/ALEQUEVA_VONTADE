import React from 'react';
import { useTranslation } from 'react-i18next';

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
  isPrices = true
}) => {
  const { t } = useTranslation();

  return (
    <div className='card card_border' id={isMainCard ? 'tour_first' : ''}>
      { isPrices && (<span className='tour_fromPrice'>{fromPrice}</span>)}
      <img className='tour_picture' src={picture} alt={pictureDescription} />

      <div className={`tour_type ${!isMainCard ? 'tour_type-small' : ''}`}>
        <div className={`tour_type-content ${!isMainCard ? 'tour_type-content--small' : ''}`}>
          <span>{tourType}</span>
        </div>
      </div>


      <div className={`tour_content card_background ${!isMainCard ? 'tour_content-small' : ''}`}>
        <h1 className={`tour_content-title ${!isMainCard ? 'tour_content-title--small' : ''}`}>
          {tourSubType}
          {duration !== null && (<span className='duration'>({duration})</span>)}
        </h1>

        <span>
          {itineraryTour}
        </span>

        <span>
          {fromToTour}
        </span>

        {isPrices && prices !== null && prices.length > 0 ? (
          <table>
            <tbody>
              {prices.map((price, index) => (
                <tr key={index}>
                  <td>{price.personCount} { t('tour.guests') }</td>
                  <td>
                    {price.price}&nbsp;
                    {price.included && (<small>{price.included}</small>)}
                    {price.special && (<small>{price.special}</small>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : isMainCard && (
          <table>
          <tbody>
            <tr>
              <td>2  { t('tour.guests') }</td>
              <td>60 €</td>
            </tr>
            <tr>
              <td>4  { t('tour.guests') }</td>
              <td>80 € <small>{ t('tour.hour_and_half.included') }</small></td>
            </tr>
            <tr>
              <td>6  { t('tour.guests') }</td>
              <td>100 €</td>
            </tr>
            <tr>
              <td>8  { t('tour.guests') }</td>
              <td>120 €</td>
            </tr>
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
};

export default Rate;
