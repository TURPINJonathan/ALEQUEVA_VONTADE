import BgImg from "@pictures/about.jpg";
import FS from "@pictures/fred_so.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const About = () => {
  const { t } = useTranslation();

  const contents = t("about.comment").split(".");
  return (
    <main id="about" style={{ backgroundImage: `url(${BgImg})` }}>
      <Helmet>
        <title>{t("meta.about.title")}</title>
        <meta property="og:title" content={t("meta.about.title")} />
        <meta name="description" content={t("meta.about.description")} />
        <meta property="og:description" content={t("meta.about.description")} />
        <meta name="keyword" content={t("meta.about.keywords")} />
        <meta name="twitter:title" content={t("meta.about.title")} />
        <meta
          name="twitter:description"
          content={t("meta.about.description")}
        />
      </Helmet>
      <section id="about_container" className="card_border">
        <article id="about_subcontainer" className="card_background">
          <h1>{t("about.history")}</h1>
          <img src={FS} alt={t("about.picture")} />
          <h2>{t("about.greetings")}</h2>
          <aside>
            {contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </aside>
        </article>
      </section>
    </main>
  );
};
export default About;
