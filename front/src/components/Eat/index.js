import React from "react";
import BgImg from "@gallery/discovery.jpg";
import { useTranslation } from "react-i18next";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

// PICTURES
import SaoPedro from "@pictures/restaurants/Sao_Pedro.png";
import XaresEmMonsarez from "@pictures/restaurants/Xares_em_Monsarez.jpg";
import LiberatoMoura from "@pictures/restaurants/Liberato_em_Moura.jpg";
import AficionadoAmieira from "@pictures/restaurants/Aficionado_em_Amieira.jpg";

const Eat = () => {
  const { t } = useTranslation();

  const restaurants = [
    {
      name: "Restaurante o Sao Pedro em Portel",
      googlePosition:
        "https://www.google.com/maps/place/Largo+5+D'outubro+6,+7220-363+Portel,+Portugal/@38.3078311,-7.7068383,17z/data=!3m1!4b1!4m6!3m5!1s0xd10a95184a30f93:0x25ac2c5d14966341!8m2!3d38.3078269!4d-7.7042634!16s%2Fg%2F11c27m1ckr?entry=ttu",
      address: "Largo 5 de outubro n6, Portel, Portugal",
      phone: "+351 266 611 520",
      mail: "restaurante_s.pedro@hotmail.com",
      picture: SaoPedro,
      pictureDescription: "TODO",
      facebookLink: "https://www.facebook.com/S.Pedro.Restaurante/",
      class: "restaurant_sao-pedro",
    },
    {
      name: "Restaurante O Xarès em Monsaraz",
      googlePosition:
        "https://www.google.com/maps/place/Xarez/@38.4443037,-7.3830528,17z/data=!3m1!4b1!4m6!3m5!1s0xd1735dee4e0299b:0xb16065c0379e20f3!8m2!3d38.4442995!4d-7.3804725!16s%2Fg%2F11ry7rmdfr",
      address: "Rua de Santiago 33, 7200-175, Portugal",
      phone: "+351 266 557 052",
      mail: null,
      picture: XaresEmMonsarez,
      pictureDescription: "TODO",
      facebookLink: "https://www.facebook.com/Monsaraz.Xarez/",
      class: "restaurant_xares-monsarez",
    },
    {
      name: "Taberna do liberato em Moura",
      googlePosition:
        "https://www.google.com/maps/place/Tv.+de+Mouraria,+Moura,+Portugal/@38.1422109,-7.4548336,17z/data=!3m1!4b1!4m10!1m2!2m1!1s2%C2%AA+Rua+da+Mouraria,+3,+Moura,+Portugal!3m6!1s0xd10bf69b64798db:0xea03b091a662fe1b!8m2!3d38.1422067!4d-7.4522587!15sCicywqogUnVhIGRhIE1vdXJhcmlhLCAzLCBNb3VyYSwgUG9ydHVnYWySAQVyb3V0ZeABAA!16s%2Fg%2F119w0nzfq?entry=ttu",
      address: "2ª Rua da Mouraria, 3, Moura, Portugal",
      phone: null,
      mail: null,
      picture: LiberatoMoura,
      pictureDescription: "TODO",
      facebookLink:
        "https://www.facebook.com/people/Taberna-do-Liberato/100063849437648/",
      class: "restaurant_liberato-moura",
    },
    {
      name: "Taberna do liberato em Moura",
      googlePosition:
        "https://www.google.com/maps/place/Tv.+de+Mouraria,+Moura,+Portugal/@38.1422109,-7.4548336,17z/data=!3m1!4b1!4m10!1m2!2m1!1s2%C2%AA+Rua+da+Mouraria,+3,+Moura,+Portugal!3m6!1s0xd10bf69b64798db:0xea03b091a662fe1b!8m2!3d38.1422067!4d-7.4522587!15sCicywqogUnVhIGRhIE1vdXJhcmlhLCAzLCBNb3VyYSwgUG9ydHVnYWySAQVyb3V0ZeABAA!16s%2Fg%2F119w0nzfq?entry=ttu",
      address: "2ª Rua da Mouraria, 3, Moura, Portugal",
      phone: null,
      mail: null,
      picture: LiberatoMoura,
      pictureDescription: "TODO",
      facebookLink:
        "https://www.facebook.com/people/Taberna-do-Liberato/100063849437648/",
      class: "restaurant_liberato-moura",
    },
    {
      name: "Restaurante o aficionado em Amieira",
      googlePosition:
        "https://www.google.com/maps/place/O+Aficionado/@38.2850629,-7.5590862,15z/data=!4m6!3m5!1s0xd10b102eddbfe6b:0x208ad87200e90b6e!8m2!3d38.2850629!4d-7.5590862!16s%2Fg%2F11c30tngkf?entry=ttu",
      address: "rua de evora, Portel, Portugal",
      phone: "+351 266 611 374",
      mail: "restaurante.aficionado@sapo.pt",
      picture: AficionadoAmieira,
      pictureDescription: "TODO",
      facebookLink: "https://www.facebook.com/OAficionado/",
      class: "restaurant_aficionado-amieira",
    },
  ];

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

              <img
                src={restaurant.picture}
                alt={restaurant.pictureDescription}
                className="picture"
              />

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
