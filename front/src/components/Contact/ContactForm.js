import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="card_border">
      <div className="card_background form_card">
        <h2>{t("contact.form.complete")}</h2>
        <form id="form">
          <label htmlFor="lastname">
            {t("contact.form.lastname")}
            <input
              type="text"
              name="lastname"
              id="form_lastname"
              placeholder="DUPONT"
            />
          </label>

          <label htmlFor="firstname">
            {t("contact.form.firstname")}
            <input
              type="text"
              name="firstname"
              id="form_firstname"
              placeholder="Jean"
            />
          </label>

          <label htmlFor="mail">
            {t("contact.form.email")}
            <input
              type="email"
              name="mail"
              id="form_mail"
              placeholder="jean.dupont@gmail.com"
            />
          </label>

          <textarea
            name="comment"
            id="form_comment"
            cols="30"
            rows="10"
            placeholder={t("contact.form.email_placeholder")}
          />

          <input
            type="submit"
            value={t("contact.form.submit")}
            id="form_submit"
          />
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
