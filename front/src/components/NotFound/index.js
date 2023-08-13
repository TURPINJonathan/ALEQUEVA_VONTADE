import BgImg from "@pictures/about.jpg";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Links from "@components/Contact/Links";
import ContactForm from "@components/Contact/ContactForm";
import ContactMap from "@components/Contact/ContactMap";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main id="notFound" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.contacts.title")}</title>
        <meta property="og:title" content={t("meta.contacts.title")} />
        <meta name="description" content={t("meta.contacts.description")} />
        <meta
          property="og:description"
          content={t("meta.contacts.description")}
        />
        <meta name="keyword" content={t("meta.contacts.keywords")} />
        <meta name="twitter:title" content={t("meta.contacts.title")} />
        <meta
          name="twitter:description"
          content={t("meta.contacts.description")}
        />
      </Helmet>
      
      <section id="notfound_container">
        <article className="card_border">
          <section className="card_background">
            <h1>{t("not_found.title")}</h1>
            <p>{t("not_found.contact")}</p>

            <NavLink to="/" end className="card_border-green">
              <button className="card_background-green">
                <span>{t("not_found.button")}</span>
              </button>
            </NavLink>
          </section>
        </article>
      </section>
    </main>
  );
};
export default NotFound;
