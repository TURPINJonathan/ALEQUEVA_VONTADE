import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@pictures/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAnchor, faAt, faBed, faBinoculars, faCamera, faSailboat } from '@fortawesome/free-solid-svg-icons';
import Toggle from '@utils/toggle.js';
import { NavLink } from 'react-router-dom';

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
      <NavLink
        to="/"
        end
      >
        <div id="logo">
          <img
            src={Logo}
            alt={t('logo')}
          />
        </div>
      </NavLink>
      <nav>
        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li className={isHovered ? 'hovered' : ''}>
            <NavLink to="/about" end>
              <FontAwesomeIcon icon={faUser} className='iconNav' />
                {isHovered && <span>{ t('nav.about')}</span>}
            </NavLink>
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faAnchor} className='iconNav' />
            {isHovered && <span>{ t('nav.boat')}</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faSailboat} className='iconNav' />
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