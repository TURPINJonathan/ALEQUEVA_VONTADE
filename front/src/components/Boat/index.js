import React from 'react';
import BgImg from '@gallery/discovery.jpg';
import { useTranslation } from 'react-i18next';
import HoverableElement from '@utils/gridPicture';

// Picture
import Welcome from '@gallery/marina.jpg';
import Sunshade from '@gallery/inside_boat-crop.jpg';
import ChangeRoom from '@gallery/boat.jpg';
import FrontDoor from '@pictures/boat.png';

const Boat = () => {
  const { t } = useTranslation();

  return (
    <main id="boat" style={{ backgroundImage: `url(${BgImg})` }}>
      <div id="boat_container">
        <HoverableElement
          title={t('boat.welcome.title')}
          content={t('boat..welcome.content')}
          pictureDescription={t('boat.welcome.alt')}
          picture={Welcome}
          element="boat_welcome"
        />
        <HoverableElement
          title={t('boat.sunshade.title')}
          pictureDescription={t('boat.sunshade.alt')}
          picture={Sunshade}
          element="boat_sunshade"
        />
        <HoverableElement
          title={t('boat.change_room.title')}
          pictureDescription={t('boat.change_room.alt')}
          picture={ChangeRoom}
          element="boat_change-room"
        />
        <HoverableElement
          title={t('boat.front_door.title')}
          pictureDescription={t('boat.front_door.alt')}
          picture={FrontDoor}
          element="boat_door"
        />
      </div>
    </main>
  );
};

export default Boat;
