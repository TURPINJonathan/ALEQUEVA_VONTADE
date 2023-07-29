import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { t } = useTranslation();

  const emailJsData = {
    service_id: 'service_xpk5ray',
    template_id: 'template_0tv3v5l',
  }

  const [contactForm, setContactForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(emailJsData.service_id, emailJsData.template_id, {
      ...contactForm,
      autoReplyMessage: t('contact.form.auto_reply_message'),
      autoReplySubject: t('contact.form.auto_reply_subject')
    }, 'd2eCRHRrBWi0SkimF').then((response) => {
      console.groupCollapsed('Message sending');
      console.log('Status : ', response.status, response.text);
      console.log('Response : ', response);
      console.groupEnd();
    }).catch((error) => {
      console.error('Message error : ', error);
    })

    setContactForm({
      lastName: '',
      firstName: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="card_border">
      <div className="card_background form_card">
        <h2>{t("contact.form.complete")}</h2>
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="lastName">
            {t("contact.form.lastname")}
            <input
              type="text"
              name="lastName"
              id="form_lastname"
              placeholder="DUPONT"
              value={contactForm.lastName}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="firstName">
            {t("contact.form.firstname")}
            <input
              type="text"
              name="firstName"
              id="form_firstname"
              placeholder="Jean"
              value={contactForm.firstName}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email">
            {t("contact.form.email")}
            <input
              type="email"
              name="email"
              id="form_mail"
              placeholder="jean.dupont@gmail.com"
              value={contactForm.email}
              onChange={handleChange}
            />
          </label>

          <textarea
            name="message"
            id="form_comment"
            cols="30"
            rows="10"
            placeholder={t("contact.form.email_placeholder")}
            value={contactForm.message}
            onChange={handleChange}
          />

          <input
            type="submit"
            value={t("contact.form.submit")}
            onChange={handleChange}
            id="form_submit"
          />
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
