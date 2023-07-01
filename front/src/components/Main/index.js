import BgImg from '@pictures/main.jpg';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  return (
    <main
      id="home"
      style={{ backgroundImage: `url(${BgImg})`}}
    >
      <div id='home_container'>
        <div id="home_subcontainer">
          <h1>{ t('home.title') }</h1>
          <h2>{ t('home.subtitle') }</h2>
        </div>
      </div>
    </main>
  )
}
export default Main;