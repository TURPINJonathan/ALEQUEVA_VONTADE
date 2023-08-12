import BgImg from "@pictures/about.jpg";
import { useTranslation } from "react-i18next";
import useResponsive from "@hooks/useResponsive";
import { Helmet } from "react-helmet";

// PICTURES
import CDTTerrace from "@pictures/sleep/casa_da_teresa_terrace.jpg";
import CDTInside from "@pictures/sleep/casa_da_teresa_inside.jpg";
import HerdadeTerrace from "@pictures/sleep/herdade_terrace.jpg";
import HerdadeInside from "@pictures/sleep/herdade_inside.jpg";
import WhatsApp from "@pictures/WhatsApp.png";

const Sleep = () => {
  const { t } = useTranslation();
  const isResponsive = useResponsive(680);
  const smallResponsive = useResponsive(430);

  return (
    <main id="sleep" style={{ backgroundImage: `url(${BgImg})` }}>
    <Helmet>
      <title>{t("meta.sleep.title")}</title>
      <meta property="og:title" content={t("meta.sleep.title")} />
      <meta name="description" content={t("meta.sleep.description")} />
      <meta property="og:description" content={t("meta.sleep.description")} />
      <meta name="keyword" content={t("meta.sleep.keywords")} />
      <meta name="twitter:title" content={t("meta.sleep.title")} />
      <meta
        name="twitter:description"
        content={t("meta.sleep.description")}
      />
    </Helmet>
      <section className="card_border sleep_element">
        <article className="card_background sleep_container">
          <aside className="sleep_content">
            <h1 className="sleep_content-title">{t("sleep.casa_da_teresa.title")}</h1>
            <p>{t("sleep.casa_da_teresa.content")}</p>
            <a href="tel:+33771747277">
              <img src={WhatsApp} alt="TODO" className="social_network-logo" />
              <span>+33 7 71 74 72 77</span>
            </a>
          </aside>

          <aside className="sleep_pictures">
            <div className="card_border-blue pictures_border">
              <div className="picture_container card_background-blue">
                {!smallResponsive && <img
                  src={CDTTerrace}
                  alt={"sleep.casa_da_teresa.picture_terrace_description"}
                />}
                {!isResponsive && <p>{t("sleep.casa_da_teresa.picture_terrace_content")}</p>}
              </div>
            </div>

            <div className="card_border-blue pictures_border">
              <div className="picture_container card_background-blue">
                {!isResponsive && <p>{t("sleep.casa_da_teresa.picture_inside_content")}</p>}
                {!smallResponsive && <img
                  src={CDTInside}
                  alt={"sleep.casa_da_teresa.picture_inside_description"}
                />}
              </div>
            </div>
          </aside>
        </article>
      </section>

      <section className="card_border sleep_element">
        <article className="card_background sleep_container sleep_container-herdade">
          <aside className="sleep_pictures herdade_pictures">
            <div className="card_border-green pictures_border">
              <div className="picture_container card_background-green">
                {!smallResponsive && <img
                  src={HerdadeInside}
                  alt={"sleep.casa_da_teresa.picture_terrace_description"}
                />}
                {!isResponsive && <p>{t("sleep.herdade.picture_terrace_content")}</p>}
              </div>
            </div>

            <div className="card_border-green pictures_border">
              <div className="picture_container card_background-green">
                {!isResponsive && <p>{t("sleep.herdade.picture_inside_content")}</p>}
                {!smallResponsive && <img
                  src={HerdadeTerrace}
                  alt={"sleep.casa_da_teresa.picture_inside_description"}
                />}
              </div>
            </div>
          </aside>

          <aside className="sleep_content herdade_content">
            <h2 className="sleep_content-title">{t("sleep.herdade.title")}</h2>
            <p>{t("sleep.herdade.content")}</p>
            <a
              href="https://www.herdaderiotorto.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("sleep.herdade.link")}
            </a>
          </aside>
        </article>
      </section>
    </main>
  );
};
export default Sleep;
