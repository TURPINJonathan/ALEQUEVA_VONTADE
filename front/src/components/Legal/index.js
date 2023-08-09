import { useTranslation } from "react-i18next";
import BgImg from "@pictures/main.jpg";
import { Helmet } from "react-helmet";

const Legal = () => {
  const { t } = useTranslation();
  return (
    <main id="legal" style={{ backgroundImage: `url(${BgImg})` }}>
    <Helmet>
      <title>{t("meta.cancellation.title")}</title>
      <meta property="og:title" content={t("meta.cancellation.title")} />
      <meta name="description" content={t("meta.cancellation.description")} />
      <meta property="og:description" content={t("meta.cancellation.description")} />
      <meta name="keyword" content={"meta.cancellation.keywords"} />
      <meta name="twitter:title" content={t("meta.cancellation.title")} />
      <meta
        name="twitter:description"
        content={t("meta.cancellation.description")}
      />
    </Helmet>
      <div className="card_border">
        <div className="card_background">
          <h1>{t("policy.title")}</h1>
          <ul>
            <li>{t("policy.cancellation.weather")}</li>
            <li>{t("policy.cancellation.team")}</li>
          </ul>
          <div>
            <p>{t("policy.refund.from_team")}</p>
            <p>{t("policy.refund.from_customer")}</p>
          </div>
          <p>{t("policy.refund.delay")}</p>
        </div>
      </div>
    </main>
  );
};
export default Legal;
