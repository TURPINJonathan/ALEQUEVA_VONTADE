import { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@pictures/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAnchor,
  faAt,
  faBed,
  faBinoculars,
  faCamera,
  faSailboat,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Toggle from "@utils/toggle.js";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div id="navigation">
      <NavLink to="/" end>
        <div id="logo">
          <img src={Logo} alt={t("logo")} />
        </div>
      </NavLink>
      <nav>
        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to="/about" end>
              <FontAwesomeIcon icon={faUser} className="iconNav" />
              {isHovered && <span>{t("nav.about")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to="/boat" end>
              <FontAwesomeIcon icon={faAnchor} className="iconNav" />
              {isHovered && <span>{t("nav.boat")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to="/tour" end>
              <FontAwesomeIcon icon={faSailboat} className="iconNav" />
              {isHovered && <span>{t("nav.tour")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to="/activities" end>
              <FontAwesomeIcon icon={faBinoculars} className="iconNav" />
              {isHovered && <span>{t("nav.doing")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to="/eat" end>
              <FontAwesomeIcon icon={faUtensils} className="iconNav" />
              {isHovered && <span>{t("nav.eat")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to={"/sleep"} end>
              <FontAwesomeIcon icon={faBed} className="iconNav" />
              {isHovered && <span>{t("nav.sleeping")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to={"/gallery"} end>
              <FontAwesomeIcon icon={faCamera} className="iconNav" />
              {isHovered && <span>{t("nav.galery")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <NavLink to={"/contact"} end>
              <FontAwesomeIcon icon={faAt} className="iconNav" />
              {isHovered && <span>{t("nav.contacts")}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? "hovered" : ""}>
            <Toggle isHovered={isHovered} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
