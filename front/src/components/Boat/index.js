import React from 'react';
import BgImg from '@galery/discovery.jpg';
import { useTranslation } from 'react-i18next';
import HoverableElement from '@utils/gridPicture';

// Picture
import Welcome from '@galery/marina.jpg';
import Sunshade from '@pictures/sunshade.png';
import ChangeRoom from '@pictures/change_room.png';
import FrontDoor from '@pictures/boat.png';

const Boat = () => {
  const { t } = useTranslation();

  return (
    <main id="boat" style={{ backgroundImage: `url(${BgImg})` }}>
      <div id="boat_container">
        <HoverableElement
          title={t('boat.welcome')}
          content={t('boat.content')}
          picture={Welcome}
          element="boat_welcome"
        />
        <HoverableElement
          title={t('boat.sunshade')}
          picture={Sunshade}
          element="boat_sunshade"
        />
        <HoverableElement
          title={t('boat.change_room')}
          picture={ChangeRoom}
          element="boat_change-room"
        />
        <HoverableElement
          title={t('boat.front_door')}
          picture={FrontDoor}
          element="boat_door"
        />
      </div>
    </main>
  );
};

export default Boat;
