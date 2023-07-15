import BgImg from '@pictures/about.jpg';
import FS from '@pictures/fred_so.png'
import { useTranslation } from 'react-i18next';

const Sleep = () => {
  const { t } = useTranslation();

  return (
    <main
      id="sleep"
      style={{ backgroundImage: `url(${BgImg})`}}
    >
      ICI
    </main>
  )
}
export default Sleep;