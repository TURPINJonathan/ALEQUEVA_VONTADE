import BgImg from "@pictures/about.jpg";

import Links from "@components/Contact/Links";
import ContactForm from "@components/Contact/ContactForm";
import ContactMap from "@components/Contact/ContactMap";

const Contact = () => {

  return (
    <main id="contact" style={{ backgroundImage: `url(${BgImg})` }}>
      <div id="contact_container">
        <div id="contact_content">
          <Links />

          <ContactForm />
        </div>

        <ContactMap />
      </div>
    </main>
  );
};
export default Contact;
