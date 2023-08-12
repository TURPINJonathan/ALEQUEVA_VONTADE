import { useTranslation } from "react-i18next";
import BgImg from "@pictures/main.jpg";
import { Helmet } from "react-helmet";

const Main = () => {
  const { t } = useTranslation();
  return (
    <main id="home" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.main.title")}</title>
        <meta property="og:title" content={t("meta.main.title")} />
        <meta name="description" content={t("meta.main.description")} />
        <meta property="og:description" content={t("meta.main.description")} />
        <meta name="keyword" content={t("meta.main.keywords")} />
        <meta name="twitter:title" content={t("meta.main.title")} />
        <meta name="twitter:description" content={t("meta.main.description")} />
      </Helmet>
      <div id="home_container" className="card_border">
        <div id="home_subcontainer" className="card_background">
          <h1>{t("home.title")}</h1>
          <h2>{t("home.subtitle")}</h2>
        </div>
      </div>
    </main>
  );
};
export default Main;
