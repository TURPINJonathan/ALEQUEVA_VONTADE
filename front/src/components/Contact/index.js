import { useParams } from "react-router";
import { useEffect } from "react";
import BgImg from "@pictures/about.jpg";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Links from "@components/Contact/Links";
import ContactForm from "@components/Contact/ContactForm";
import ContactMap from "@components/Contact/ContactMap";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang); // Définissez la langue dans i18next
    }
  }, [lang, i18n]);
  
  return (
    <main id="contact" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.contacts.title")}</title>
        <meta property="og:title" content={t("meta.contacts.title")} />
        <meta name="description" content={t("meta.contacts.description")} />
        <meta property="og:description" content={t("meta.contacts.description")} />
        <meta name="keyword" content={t("meta.contacts.keywords")} />
        <meta name="twitter:title" content={t("meta.contacts.title")} />
        <meta
          name="twitter:description"
          content={t("meta.contacts.description")}
        />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>
      <section id="contact_container">
        <div id="contact_content">
          <Links />

          <ContactForm />
        </div>

        <ContactMap />
      </section>
    </main>
  );
};
export default Contact;
