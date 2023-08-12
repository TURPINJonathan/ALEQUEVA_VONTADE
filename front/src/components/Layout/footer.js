import TurismoDePortugalLogo from "@pictures/turismo_de_portugal_lolo.png";
import AlquevaVontadeLogo from "@pictures/logo.png";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <img src={AlquevaVontadeLogo} alt={t("logo")} />
        <span className="footer_legal">
          frederic&sofia, LDA&nbsp;|&nbsp;RNAAT n°96/2023
        </span>
      </div>
      <div>
        <p className="footer_alqueva">Alqueva & Vontade</p>
      </div>
      <div>
        <span className="footer_legal">
          {t("turismo_de_portugal.certified")}
        </span>
        <a
          href="https://www.visitportugal.com/fr/content/alqueva-%C3%A0-vontade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={TurismoDePortugalLogo}
            alt={t("turismo_de_portugal.logo")}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
