import TurismoDePortugalLogo from '@pictures/turismo_de_portugal_lolo.png';
import AlquevaVontadeLogo from "@pictures/logo.png";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <img src={AlquevaVontadeLogo} alt={t("logo")} />
        <span className='footer_legal'>frederic&sofia, LDA&nbsp;|&nbsp;RNAAT n°96/2023</span>
      </div>
      <div>
        <p className="footer_alqueva">Alqueva & Vontade</p>
      </div>
      <div>
        <span className='footer_legal'>{t('turismo_de_portugal.certified')}</span>
        <img src={TurismoDePortugalLogo} alt={t('turismo_de_portugal.logo')} />
      </div>
    </footer>
  );
};

export default Footer;
