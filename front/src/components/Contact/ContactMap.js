import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactMap = () => {
  const { t } = useTranslation();

  const position = [38.27699985042666, -7.533252902970976];

  return (
    <div id="contact_visual-map" className="card_border">
      <div className="card_background visual_map-content">
        <div className="contact_find">
          <h2>{t('contact.map.where')}</h2>
          <a
            href="https://www.google.com/maps/place/38%C2%B016'37.2%22N+7%C2%B031'59.7%22W/@38.2769999,-7.5332529,17z/data=!3m1!4b1!4m4!3m3!8m2!3d38.2769999!4d-7.5332529?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_location"
          >
            <FontAwesomeIcon
              icon={faLocationPin}
              className="social_network-logo"
            />
            <p>
              <span>Amieira Marina</span>
              <span>7220-999 PORTEL</span>
            </p>
          </a>
        </div>

        <div id="contact_map">
          <MapContainer
            center={position}
            zoom={13}
            style={{ width: "100%", height: "400px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <a
                  href="https://www.google.com/maps/place/38%C2%B016'37.2%22N+7%C2%B031'59.7%22W/@38.2769999,-7.5332529,17z/data=!3m1!4b1!4m4!3m3!8m2!3d38.2769999!4d-7.5332529?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_location"
                >
                  <p>Amieira Marina, 7220-999 PORTEL</p>
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
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
export default ContactMap;
