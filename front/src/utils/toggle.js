import Fr from '@pictures/flag_france.png';
import Pt from '@pictures/flag_portugal.png';
import { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';


const Toggle = ({ isHovered }) => {
  const { t } = useTranslation();

  //TODO Use state
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    const switchLang = isActive ? 'pt' : 'fr';
    i18n.changeLanguage(switchLang)
  };

  return (
    <div id='toggle'>
      {(isHovered) ? (
        <>
          <img
            src={Fr}
            alt={ t('nav.french')}
            className={`toggle ${isActive ? 'off' : 'on'}`}
            onClick={handleToggle}
          />
          <img
            src={Pt}
            alt={ t('nav.portuguese')}
            className={`toggle ${isActive ? 'on' : 'off'}`}
            onClick={handleToggle}
          />
        </>
      ) : 
        <>
          <img
            src={Fr}
            alt={ t('nav.french')}
            className={`toggle ${isActive ? 'hidden' : 'on'}`}
            onClick={handleToggle}
          />
          <img
            src={Pt}
            alt={ t('nav.portuguese')}
            className={`toggle ${isActive ? 'on' : 'hidden'}`}
            onClick={handleToggle}
          />
        </>
      }
    </div>
  );
};
export default Toggle;