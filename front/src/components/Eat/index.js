import React from "react";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";
import useResponsive from "@hooks/useResponsive";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import { restaurants } from "@data";

const Eat = () => {
  const { t } = useTranslation();
  const isMediaDisplay = useResponsive(570)

  return (
    <main id="eat" style={{ backgroundImage: `url(${BgImg})` }}>
      <div className="eat_container">
        {restaurants.map((restaurant, index) => (
          <div className={`card_border ${restaurant.class}`} key={index}>
            <div className="restaurant card_background">
              <div className="restaurant_name">{restaurant.name}</div>

              <a
                href={restaurant.googlePosition}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="restaurants_elements">{restaurant.address}</div>
              </a>

              {restaurant.phone !== null && (
                <a
                  href={`tel:${restaurant.phone}`}
                  className="restaurants_elements"
                >
                  {restaurant.phone}
                </a>
              )}

              {restaurant.mail !== null && (
                <div className="restaurants_elements">
                  <a href={`mailto: ${restaurant.mail}`}>{restaurant.mail}</a>
                </div>
              )}

              {!isMediaDisplay && <img
                src={restaurant.picture}
                alt={t(restaurant.pictureDescription)}
                className="picture"
              />}

              <div className="restaurants_elements">
                <a
                  href={restaurant.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    style={{ color: "#3982e4" }}
                    className="icons facebook_icon"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
        <h1 className="eat_title">{t("restaurants")}</h1>
      </div>
    </main>
  );
};

export default Eat;
