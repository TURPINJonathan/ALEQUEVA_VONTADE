import Fr from '@pictures/flag_france.png';
import Pt from '@pictures/flag_portugal.png';
import En from '@pictures/flag_england.png';
import { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const Toggle = ({ isHovered }) => {
  const { t } = useTranslation();

  const [activeLang, setActiveLang] = useState('fr');

  const handleToggle = (lang) => {
    if (lang !== activeLang) {
      setActiveLang(lang);
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div id="toggle">
      {isHovered ? (
        <>
          <img
            src={Fr}
            alt={t('nav.french')}
            className={`toggle ${activeLang === 'fr' ? 'on' : 'off'}`}
            onClick={() => handleToggle('fr')}
          />
          <img
            src={Pt}
            alt={t('nav.portuguese')}
            className={`toggle ${activeLang === 'pt' ? 'on' : 'off'}`}
            onClick={() => handleToggle('pt')}
          />
          <img
            src={En}
            alt={t('nav.english')}
            className={`toggle ${activeLang === 'en' ? 'on' : 'off'}`}
            onClick={() => handleToggle('en')}
          />
        </>
      ) : (
        <>
          <img
            src={Fr}
            alt={t('nav.french')}
            className={`toggle ${activeLang === 'fr' ? 'on' : 'hidden'}`}
            onClick={() => handleToggle('fr')}
          />
          <img
            src={Pt}
            alt={t('nav.portuguese')}
            className={`toggle ${activeLang === 'pt' ? 'on' : 'hidden'}`}
            onClick={() => handleToggle('pt')}
          />
          <img
            src={En}
            alt={t('nav.english')}
            className={`toggle ${activeLang === 'en' ? 'on' : 'hidden'}`}
            onClick={() => handleToggle('en')}
          />
        </>
      )}
    </div>
  );
};

export default Toggle;
