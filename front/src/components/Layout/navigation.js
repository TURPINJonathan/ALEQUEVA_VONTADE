import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@pictures/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPersonHiking, faAt, faBed, faBinoculars, faCamera } from '@fortawesome/free-solid-svg-icons';
import Toggle from '@utils/toggle.js';

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
      <div id="logo">
        <img
          src={Logo}
          alt={t('logo')}
        />
      </div>

      <nav>
        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li className={isHovered ? 'hovered' : ''}>
          <FontAwesomeIcon icon={faUser} className='iconNav' />
            {isHovered && <span>{ t('nav.about')}</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faPersonHiking} className='iconNav' />
            {isHovered && <span>{ t('nav.walking')}</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faBinoculars} className='iconNav' />
            {isHovered && <span>{ t('nav.doing')}</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faBed} className='iconNav' />
            {isHovered && <span>{ t('nav.sleeping')}</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faCamera} className='iconNav' />
            {isHovered && <span>{ t('nav.galery')}</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faAt} className='iconNav' />
            {isHovered && <span>{ t('nav.contacts')}</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}><Toggle isHovered={isHovered}/></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navigation;