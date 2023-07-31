import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { t } = useTranslation();

  // EmailJS endpoints
  const emailJsData = {
    service_id: "service_xpk5ray",
    template_id: "template_0tv3v5l",
  };

  // Toast configurations
  const toastOptions = useMemo(() => ({
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }), []);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    message: "",
  });

  // Contact form submission
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  // Contact form set value on change
  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  // Contact form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmit(true);

    // Check if email is valid
    const isEmailValid = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    // Check input value before submit
    const requiredFields = ["lastName", "email", "message"];
    const missingFields = requiredFields.filter(
      (field) => !contactForm[field].trim()
    );

    if (missingFields.length > 0) {
      const translatedFields = missingFields.map((field) =>
        t(`contact.form.${field}`)
      );
      const errorMessage =
        t("contact.form.missing_submit") + ":\n" + translatedFields.join(", ");

      toast.error(errorMessage, {
        ...toastOptions,
      });
      return;
    }

    // Check email
    if (!isEmailValid(contactForm.email)) {
      toast.error(t("contact.form.invalid_email"), {
        ...toastOptions,
      });
      return;
    }

    // Send message by emailJS
    emailjs
      .send(
        emailJsData.service_id,
        emailJsData.template_id,
        {
          ...contactForm,
          autoReplyMessage: t("contact.form.auto_reply_message"),
          autoReplySubject: t("contact.form.auto_reply_subject"),
        },
        "d2eCRHRrBWi0SkimF"
      )
      .then((response) => {
        console.groupCollapsed("Message sending");
        console.log("Status : ", response.status, response.text);
        console.log("Response : ", response);
        console.groupCollapsed("Message detail");
        console.log(contactForm);
        console.groupEnd();
        console.groupEnd();

        toast.success(t("contact.form.sucess_submit"), {
          ...toastOptions,
        });
      })
      .catch((error) => {
        setIsFormSubmit(false)
        console.error("Message error : ", error);

        toast.error(t("contact.form.error_submit"), {
          ...toastOptions,
        });
      })
      .finally(() => {
        setIsFormSubmit(false);
      });

    setContactForm({
      lastName: "",
      firstName: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    if (isFormSubmit) {
      toast.info(t("contact.form.waiting_submit"), {
        ...toastOptions,
      });
    }
  }, [isFormSubmit, t, toastOptions]);

  return (
    <div className="card_border">
      <div className="card_background form_card">
        <h2>{t("contact.form.complete")}</h2>
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="lastName">
            {t("contact.form.lastName")}
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
            {t("contact.form.firstName")}
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
