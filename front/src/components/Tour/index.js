import React from 'react';
import BgImg from '@galery/swimming.jpg';
import { useTranslation } from 'react-i18next';

// Pictures
import OneHourPicure from '@pictures/tours/one_hour.jpg';
import HourAndHalfPicture from '@pictures/tours/hour_and_half.jpg';
import TwoHoursPicture from '@pictures/tours/two_hours.jpg';
import ThreeHoursPicure from '@pictures/tours/three_hours.jpg';
import PersonnalizedPicure from '@pictures/tours/personnalized.jpg';
import Rate from '@components/Tour/Rate';

const Tour = () => {
  const { t } = useTranslation();

	const rates = [
		{
			tour: 'hour',
			key: 1,
			picture: OneHourPicure,
			prices: [
				{ personCount: 2, price: "60 €" },
				{ personCount: 4, price: "80 €", included: t('tour.hour.included') },
				{ personCount: 6, price: "100 €" },
				{ personCount: 8, price: "120 €" }
			]
		},
		{
			tour: 'two_hours',
			key: 2,
			picture: TwoHoursPicture,
			prices: [
				{ personCount: 2, price: "100 €" },
				{ personCount: 4, price: "120 €", included: t('tour.two_hours.included') },
				{ personCount: 6, price: "140 €", special: t('tour.three_hours.special') },
				{ personCount: 8, price: "160 €" }
			]
		},
		{
			tour: 'three_hours',
			key: 3,
			picture: ThreeHoursPicure,
			prices: [
				{ personCount: 2, price: "40 €" },
				{ personCount: 4, price: "70 €", included: t('tour.three_hours.included') },
				{ personCount: 6, price: "200 €", special: t('tour.three_hours.special') },
				{ personCount: 8, price: "230 €" }
			]
		},
		{
			tour: 'private',
			key: 4,
			picture: PersonnalizedPicure,
			isPrices: false
		}
	];
	
  return (
    <main id="tour" style={{ backgroundImage: `url(${BgImg})` }}>
			<div id='tour_container'>
				<Rate
					id = 'tour_first'
					fromPrice = { t('tour.hour_and_half.from_price') }
					picture = { HourAndHalfPicture }
					isMainCard = { true }
					tourType = { t('tour.hour_and_half.tour_type') }
					tourSubType = { t('tour.hour_and_half.tour_subtype') }
					duration = { t('tour.hour_and_half.duration') }
					itineraryTour = { t('tour.hour_and_half.itinerary_tour') }
					fromToTour = { t('tour.hour_and_half.from_to_tour') }
				/>

				<div id='tour_second'>
					{rates.map((rate, index) => (
						<Rate
							key = { index }
							fromPrice = { t(`tour.${rate.tour}.from_price`) }
							picture = { rate.picture }
							tourType = { t(`tour.${rate.tour}.tour_type`) }
							tourSubType = { t(`tour.${rate.tour}.tour_subtype`) }
							duration = { rate.tour !== 'private' ? t(`tour.${rate.tour}.duration`) : null }
							itineraryTour = { t(`tour.${rate.tour}.itinerary_tour`) }
							fromToTour = { t(`tour.${rate.tour}.from_to_tour`) }
							pictureDescription = { t(`tour.${rate.tour}.picture_description`)}
							prices = { rate.prices ?? [] }
							isPrices = { rate.isPrices }
						/>
					))}
				</div>
			</div>
    </main>
  );
};

export default Tour;
