import Fr from '@pictures/flag_france.png';
import Pt from '@pictures/flag_portugal.png';
import { useState } from 'react';


const Toggle = ({ isHovered }) => {

  //TODO Use state
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div id='toggle'>
      {(isHovered) ? (
        <>
          <img
            src={Fr}
            alt="Toggle Off"
            className={`toggle ${isActive ? 'off' : 'on'}`}
            onClick={handleToggle}
          />
          <img
            src={Pt}
            alt="Toggle On"
            className={`toggle ${isActive ? 'on' : 'off'}`}
            onClick={handleToggle}
          />
        </>
      ) : 
        <>
          <img
            src={Fr}
            alt="Toggle Off"
            className={`toggle ${isActive ? 'hidden' : 'on'}`}
            onClick={handleToggle}
          />
          <img
            src={Pt}
            alt="Toggle On"
            className={`toggle ${isActive ? 'on' : 'hidden'}`}
            onClick={handleToggle}
          />
        </>
      }
    </div>
  );
};
export default Toggle;