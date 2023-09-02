import { useParams } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BgImg from "@pictures/main.jpg";
import { Helmet } from "react-helmet";

const Legal = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang); // Définissez la langue dans i18next
    }
  }, [lang, i18n]);
  return (
    <main id="legal" style={{ backgroundImage: `url(${BgImg})` }}>
    <Helmet>
      <title>{t("meta.cancellation.title")}</title>
      <meta property="og:title" content={t("meta.cancellation.title")} />
      <meta name="description" content={t("meta.cancellation.description")} />
      <meta property="og:description" content={t("meta.cancellation.description")} />
      <meta name="keyword" content={t("meta.cancellation.keywords")} />
      <meta name="twitter:title" content={t("meta.cancellation.title")} />
      <meta
        name="twitter:description"
        content={t("meta.cancellation.description")}
      />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />
    </Helmet>
      <section className="card_border">
        <article className="card_background">
          <h1>{t("policy.title")}</h1>
          <ul>
            <li>{t("policy.cancellation.weather")}</li>
            <li>{t("policy.cancellation.team")}</li>
          </ul>
          <aside>
            <p>{t("policy.refund.from_team")}</p>
            <p>{t("policy.refund.from_customer")}</p>
          </aside>
          <p>{t("policy.refund.delay")}</p>
        </article>
      </section>
    </main>
  );
};
export default Legal;
