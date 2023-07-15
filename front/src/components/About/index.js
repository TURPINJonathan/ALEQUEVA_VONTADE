import BgImg from '@pictures/about.jpg';
import FS from '@pictures/fred_so.png'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const contents = t('about.comment').split('.');
  return (
    <main
      id="about"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div id='about_container'>
        <div id="about_subcontainer">
          <h1>{t('about.history')}</h1>
          <img src={FS} alt={t('about.picture')} />
          <h2>{t('about.greetings')}</h2>
          <div>
            {contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
export default About;