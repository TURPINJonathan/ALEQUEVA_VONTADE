import { useState } from 'react';

import Logo from '@pictures/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPersonHiking, faAt, faBed, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import Toggle from '@utils/toggle.js';

const Navigation = () => {
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
          alt='Logo de Alqueva à Vontade'
        />
      </div>

      <nav>
        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li className={isHovered ? 'hovered' : ''}>
          <FontAwesomeIcon icon={faUser} className='iconNav' />
            {isHovered && <span>A propos</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faPersonHiking} className='iconNav' />
            {isHovered && <span>Nos promenades</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faBinoculars} className='iconNav' />
            {isHovered && <span>Que faire</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faBed} className='iconNav' />
            {isHovered && <span>Où dormir</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}>
            <FontAwesomeIcon icon={faAt} className='iconNav' />
            {isHovered && <span>Contact</span>}
          </li>
          <li className={isHovered ? 'hovered' : ''}><Toggle isHovered={isHovered}/></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navigation;