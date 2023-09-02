import Fr from "@pictures/flag_france.png";
import Pt from "@pictures/flag_portugal.png";
import En from "@pictures/flag_england.png";
import { useEffect, useState } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import useResponsive from "@hooks/useResponsive";
import { useLocation, useNavigate } from "react-router";

const Toggle = ({ isHovered, setIsHovered }) => {

  const path = window.location.pathname.split('/')[1]
  const validLangs = ["fr", "en", "pt"];
  const currentLang = validLangs.includes(path) ? path : "pt";

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLang, setActiveLang] = useState(currentLang);
  const [showFlags, setShowFlags] = useState(false);
  const isMobile = useResponsive(850);

  // Function to handle language change when a flag is clicked
  const handleToggle = (lang) => {
    if (lang !== activeLang) {
      setActiveLang(lang);
      i18n.changeLanguage(lang);

      // Récupérez le slug de l'URL actuelle
      const pathname = location.pathname;
      const slugIndex = pathname.indexOf("/", 1); // Recherchez le deuxième "/" dans l'URL
      const slug = slugIndex !== -1 ? pathname.substr(slugIndex + 1) : "";

      // Mettez à jour l'URL avec la nouvelle langue tout en conservant le slug
      navigate(`/${lang}/${slug}`);
    }
    if (isMobile) {
      setShowFlags(!showFlags);
    }
    // Set isHovered to false after clicking a flag
    setIsHovered(false);
  };

  // Show flags on mouse enter if not in mobile view
  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowFlags(true);
    }
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    // Hide flags on mouse leave if not in mobile view
    if (!isMobile) {
      setShowFlags(false);
    }
    // Set isHovered to false on mouse leave
    setIsHovered(false);
  };

  // Effect to control when to show flags
  useEffect(() => {
    // Show flags when hovered and not in mobile view
    if (isHovered && !isMobile) {
      setShowFlags(true);
    } else {
      // Hide flags in other cases
      setShowFlags(false);
    }
  }, [isHovered, isMobile]);

  return (
    <div
      id="toggle"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (isMobile) {
          setShowFlags(!showFlags);
        }
      }}
    >
      {showFlags || (!isMobile && isHovered) ? (
        <div>
          <img
            src={Fr}
            alt={t("nav.french")}
            className={`toggle ${activeLang === "fr" ? "on" : "off"}`}
            onClick={() => handleToggle("fr")}
          />
          <img
            src={Pt}
            alt={t("nav.portuguese")}
            className={`toggle ${activeLang === "pt" ? "on" : "off"}`}
            onClick={() => handleToggle("pt")}
          />
          <img
            src={En}
            alt={t("nav.english")}
            className={`toggle ${activeLang === "en" ? "on" : "off"}`}
            onClick={() => handleToggle("en")}
          />
        </div>
      ) : (
        <div>
          <img
            src={Fr}
            alt={t("nav.french")}
            className={`toggle ${activeLang === "fr" ? "on" : "hidden"}`}
            onClick={() => handleToggle("fr")}
          />
          <img
            src={Pt}
            alt={t("nav.portuguese")}
            className={`toggle ${activeLang === "pt" ? "on" : "hidden"}`}
            onClick={() => handleToggle("pt")}
          />
          <img
            src={En}
            alt={t("nav.english")}
            className={`toggle ${activeLang === "en" ? "on" : "hidden"}`}
            onClick={() => handleToggle("en")}
          />
        </div>
      )}
    </div>
  );
};

export default Toggle;
