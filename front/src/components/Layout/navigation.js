import { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@pictures/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAnchor,
  faAt,
  faBinoculars,
  faCamera,
  faSailboat,
  faCircleExclamation,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Toggle from "@utils/toggle.js";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation();

  const path = window.location.pathname.split('/')[1]

  const validLangs = ["fr", "en", "pt"];
  const currentLang = validLangs.includes(path) ? path : "pt";

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <header id="navigation">
      <NavLink to={`/${currentLang}/`} end>
        <div id="logo">
          <img src={Logo} alt={t("logo")} />
        </div>
      </NavLink>
      <nav>
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseEnter || handleMouseLeave}
        >
          <li>
            <NavLink activeclassname="menu_selected" to={`/${currentLang}/about`} end>
              <FontAwesomeIcon icon={faUser} className="iconNav" />
              {isHovered && <span>{t("nav.about")}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="menu_selected" to={`/${currentLang}/boat`} end>
              <FontAwesomeIcon icon={faAnchor} className="iconNav" />
              {isHovered && <span>{t("nav.boat")}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="menu_selected" to={`/${currentLang}/tour`} end>
              <FontAwesomeIcon icon={faSailboat} className="iconNav" />
              {isHovered && <span>{t("nav.tour")}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="menu_selected" to={`/${currentLang}/gallery`} end>
              <FontAwesomeIcon icon={faCamera} className="iconNav" />
              {isHovered && <span>{t("nav.gallery")}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="menu_selected" to={`/${currentLang}/activities`} end>
              <FontAwesomeIcon icon={faBinoculars} className="iconNav" />
              {isHovered && <span>{t("nav.doing")}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="menu_selected" to={`/${currentLang}/contact`} end>
              <FontAwesomeIcon icon={faAt} className="iconNav" />
              {isHovered && <span>{t("nav.contacts")}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="menu_selected"
              to={`/${currentLang}/cancellation_policy`}
              end
            >
              <FontAwesomeIcon icon={faPowerOff} className="iconNav" />
              {isHovered && <span>{t("nav.cancellation")}</span>}
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCircleExclamation} className="iconNav" />
              {isHovered && <span>{t("nav.claim")}</span>}
            </a>
          </li>
          <li>
            <Toggle isHovered={isHovered} setIsHovered={setIsHovered} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
