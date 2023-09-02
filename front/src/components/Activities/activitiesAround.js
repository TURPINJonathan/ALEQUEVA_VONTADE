import React from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ActivitiesAround = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section id="activities_container">
      {data.map((item, index) => (
        <article key={index} className="activities_element card_border">
          <div
            className={`inside_element card_background ${
              item.direction === "left" ? "picture_left" : ""
            }`}
          >
            <aside className="element_content">
              {item.name === "main" ? (
                <h1>{t(item.title)}</h1>
              ) : (
                <h2>{t(item.title)}</h2>
              )}
              <div>
                {item.content?.map((content, index) => (
                  <p key={index}>{t(content)}</p>
                ))}
                {item.address && (
                  <a
                    href={item.googlePosition}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>{item.address}</div>
                  </a>
                )}

                {item.phone !== null && (
                  <a href={`tel:${item.phone}`}>{item.phone}</a>
                )}

                {item.whatsapp && (
                  <a href={`tel:${item.whatsapp}`}>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#008D2E", marginLeft: '1rem', marginRight: '0.5rem' }}
                  />
                  {item.whatsapp}</a>
                )}

                {item.mail !== null && (
                  <div>
                    <a href={`mailto: ${item.mail}`}>{item.mail}</a>
                  </div>
                )}
              </div>
              {item.website && (
                <p>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t("activities.website")}</span>
                    <span>{t(item.title)}</span>
                  </a>
                </p>
              )}

              {item.facebookLink && (
                <div>
                  <a
                    href={item.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareFacebook}
                      style={{ color: "#3982e4" }}
                    />
                  </a>
                </div>
              )}
            </aside>
            <img src={item.picture} alt={t(item.pictureDescription)} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default ActivitiesAround;
