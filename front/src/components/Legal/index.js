import { useTranslation } from "react-i18next";
import BgImg from "@pictures/main.jpg";

const Legal = () => {
  const { t } = useTranslation();
  return (
    <main id="legal" style={{ backgroundImage: `url(${BgImg})` }}>
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
