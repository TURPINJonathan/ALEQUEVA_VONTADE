import { useState } from 'react';
import BgImg from '@pictures/about.jpg';
import { useTranslation } from 'react-i18next';
// import Modal from 'react-modal';


import Relaxation from '@galery/relaxation.jpg';
import Acostage from '@galery/acostage.jpg';
import Contemplation from '@galery/contemplation.jpg';
import Conviviality from '@galery/conviviality.jpg';
import Discovery from '@galery/discovery.jpg';
import Escape from '@galery/escape.jpg';
import Immensity from '@galery/immensity.jpg';
import MadeToMesure from '@galery/made_to_mesure.jpg';
import Marina from '@galery/marina.jpg';
import Romantic from '@galery/romantic.jpg';
import Sunset from '@galery/sunset.jpg';
import Swimming from '@galery/swimming.jpg';

const Galery = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const openModal = (picture) => {
    setSelectedPicture(picture);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPicture(null);
    setModalIsOpen(false);
  };


  const pictures = [
    {
      id: 1,
      path: Relaxation,
      title: t('galery.title.relaxation'),
      description: t('galery.description.relaxation'),
      key: 'relaxation'
    },
    {
      id: 2,
      path: Discovery,
      title: t('galery.title.discovery'),
      description: t('galery.description.discovery'),
      key: 'discovery'
    },
    {
      id: 3,
      path: Acostage,
      title: t('galery.title.acostage'),
      description: t('galery.description.acostage'),
      key: 'acostage'
    },
    {
      id: 4,
      path: Escape,
      title: t('galery.title.escape'),
      description: t('galery.description.escape'),
      key: 'escape'
    },
    {
      id: 5,
      path: Sunset,
      title: t('galery.title.sunset'),
      description: t('galery.description.sunset'),
      key: 'sunset'
    },
    {
      id: 6,
      path: Marina,
      title: t('galery.title.marina'),
      description: t('galery.description.marina'),
      key: 'marina'
    },
    {
      id: 7,
      path: Romantic,
      title: t('galery.title.romantic'),
      description: t('galery.description.romantic'),
      key: 'romantic'
    },
    {
      id: 8,
      path: Swimming,
      title: t('galery.title.swimming'),
      description: t('galery.description.swimming'),
      key: 'swimming'
    },
    {
      id: 9,
      path: Contemplation,
      title: t('galery.title.contemplation'),
      description: t('galery.description.contemplation'),
      key: 'contemplation'
    },
    {
      id: 10,
      path: Immensity,
      title: t('galery.title.immensity'),
      description: t('galery.description.immensity'),
      key: 'immensity'
    },
    {
      id: 11,
      path: Conviviality,
      title: t('galery.title.conviviality'),
      description: t('galery.description.conviviality'),
      key: 'conviviality'
    },
    {
      id: 12,
      path: MadeToMesure,
      title: t('galery.title.made_to_mesure'),
      description: t('galery.description.made_to_mesure'),
      key: 'made_to_mesure'
    }

  ]

  return (
    <main id="galery" style={{ backgroundImage: `url(${BgImg})` }}>
      <div className="galery_container">
        {pictures.map((picture, index) => (
          <>
            <img
              key={index}
              id={picture.key}
              onClick={() => openModal(picture)}
              src={picture.path} alt={picture.description}
              className='galery_item'
            />
          </>
        ))}
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedPicture && (
          <div>
            <img src={selectedPicture.path} alt={selectedPicture.description} />
            <h2>{selectedPicture.title}</h2>
            <p>{selectedPicture.description}</p>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal> */}
    </main>
  );
}
export default Galery;