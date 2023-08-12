import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactMap = () => {
  const { t } = useTranslation();

  const positions = [
    {
      id: 1,
      lat: 38.27699985042666,
      lng: -7.533252902970976,
      googleURL: "https://www.google.com/maps/place/Amieira+Marina/@38.2770058,-7.5328033,229m/data=!3m1!1e3!4m9!3m8!1s0xd10b0d05a75df59:0xed782ad5c2ac4a7!5m2!4m1!1i2!8m2!3d38.2772001!4d-7.533148!16s%2Fg%2F1x5qv0nw?entry=ttu",
      street: "Amieira Marina",
      city: "7220-999 PORTEL",
    },
    {
      id: 2,
      lat: 38.293066859949796,
      lng: -7.561392075462422,
      googleURL: "https://www.google.com/maps/place/Parque+da+Praia+Fluvial+da+Amieira/@38.2916788,-7.560538,743m/data=!3m1!1e3!4m9!1m2!2m1!1sPassadi%C3%A7o+em+Madeira,+7220-131+Amieira+e+Alqueva,+Portugal!3m5!1s0xd10b15d9bc812c9:0x93c0a15de7ce259b!8m2!3d38.2937495!4d-7.5594594!16s%2Fg%2F11s0s4dr1k?entry=ttu",
      street: "Passadiço em Madeira",
      city: "7220-131 Amieira e Alqueva",
    },
  ];

  const totalPositions = positions.length;
  const centerLat = positions.reduce((sum, position) => sum + position.lat, 0) / totalPositions;
  const centerLng = positions.reduce((sum, position) => sum + position.lng, 0) / totalPositions;

  return (
    <article id="contact_visual-map" className="card_border">
      <div className="card_background visual_map-content">
        <div className="contact_find">
          <h2>{t("contact.map.where")}</h2>
          {positions.map((position) => (
            <h3>
              <a
                href={position.googleURL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact_location"
              >
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="social_network-logo"
                />
                <p>
                  <span>{position.street}</span>
                  <span>{position.city}</span>
                </p>
              </a>
            </h3>
          ))}
        </div>

        <div id="contact_map">
          <MapContainer
            center={[centerLat, centerLng]}
            zoom={14}
            style={{ width: "100%", height: "400px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {positions.map((position) => (
              <Marker key={position.id} position={[position.lat, position.lng]}>
                <Popup>
                  <a
                    href={position.googleURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_location"
                  >
                    <p>
                      {position.street}, {position.city}
                    </p>
                  </a>
                  <p>
                    <a href="tel:+351 912 174 159">+351 912 174 159</a>
                  </p>
                  <p>
                    <a href="mailto:contact@alquevavontade.com">
                      contact@alquevavontade.com
                    </a>
                  </p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </article>
  );
};
export default ContactMap;
