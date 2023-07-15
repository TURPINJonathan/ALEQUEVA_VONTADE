import BgImg from '@pictures/about.jpg';
import FS from '@pictures/fred_so.png'
import { useTranslation } from 'react-i18next';

// PICTURES
import CDTTerrace from '@pictures/sleep/casa_da_teresa_terrace.jpg';
import CDTInside from '@pictures/sleep/casa_da_teresa_inside.jpg';
import HerdadeTerrace from '@pictures/sleep/herdade_terrace.jpg';
import HerdadeInside from '@pictures/sleep/herdade_inside.jpg';

const Sleep = () => {
  const { t } = useTranslation();

  return (
    <main
      id="sleep"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className='card_border sleep_element'>
        <div className='card_background sleep_container'>
          <div className='sleep_content'>
            <h1>{t('sleep.casa_da_teresa.title')}</h1>
            <p>{t('sleep.casa_da_teresa.content')}</p>
          </div>

          <div className='sleep_pictures'>
            <div className='card_border-blue'>
              <div className='picture_container card_background-blue'>
                <img
                  src={CDTTerrace}
                  alt={'sleep.casa_da_teresa.picture_terrace_description'}
                />
                <p>{t('sleep.casa_da_teresa.picture_terrace_content')}</p>
              </div>
            </div>

            <div className='card_border-blue'>
              <div className='picture_container card_background-blue'>
                <p>{t('sleep.casa_da_teresa.picture_inside_content')}</p>
                <img
                  src={CDTInside}
                  alt={'sleep.casa_da_teresa.picture_inside_description'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='card_border sleep_element'>
        <div className='card_background sleep_container'>
          <div className='sleep_pictures herdade_pictures'>
            <div className='card_border-green'>
              <div className='picture_container card_background-green'>
                <img
                  src={HerdadeInside}
                  alt={'sleep.casa_da_teresa.picture_terrace_description'}
                />
                <p>{t('sleep.herdade.picture_terrace_content')}</p>
              </div>
            </div>

            <div className='card_border-green'>
              <div className='picture_container card_background-green'>
                <p>{t('sleep.herdade.picture_inside_content')}</p>
                <img
                  src={HerdadeTerrace}
                  alt={'sleep.casa_da_teresa.picture_inside_description'}
                />
              </div>
            </div>
          </div>

          <div className='sleep_content herdade_content'>
            <h1>{t('sleep.herdade.title')}</h1>
            <p>{t('sleep.herdade.content')}</p>
            <a
              href='https://www.herdaderiotorto.com/'
              target='_blank'
            >
              {t('sleep.herdade.link')}
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Sleep;