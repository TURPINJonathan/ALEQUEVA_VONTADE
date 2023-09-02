import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import Facebook from "@pictures/Facebook.png";
import Instagram from "@pictures/Instagram.png";
import WhatsApp from "@pictures/WhatsApp.png";

const Links = () => {
  const { t } = useTranslation();

  return (
    <article className="card_border">
      <div className="card_background">
        <h1>{t("contact.link.question")}</h1>
        <h2>{t("contact.link.reservation")}</h2>
        <h2>{t("contact.link.contact")}</h2>

        <div id="contact_links">
          <p>
            <a href="tel:+351 912 174 159">
              <img src={WhatsApp} alt="TODO" className="social_network-logo" />
              <span>+351 912 174 159</span>
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faAt} className="social_network-logo" />
            <a href="mailto:contact@alquevavontade.com">
              contact@alquevavontade.com
            </a>
          </p>
          <p className="social_links">
            <span>{t("contact.link.social")}</span>
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=100089961169106"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt="TODO"
                  className="social_network-logo"
                />
              </a>
              <a
                href="https://www.instagram.com/alqueva_a_vontade/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="TODO"
                  className="social_network-logo"
                />
              </a>
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};
export default Links;
