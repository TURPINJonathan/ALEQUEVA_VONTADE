import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Language manager
import TranslationProvider from "./TranslationProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

//? STYLES
import "./sass/index.scss";

//? LAYOUT
import Navigation from "@components/Layout/navigation";
import Footer from "@components/Layout/footer";

//? COMPONENTS
import Main from "@components/Main";
import About from "@components/About";
import Boat from "@components/Boat";
import Tour from "@components/Tour";
import Activities from "@components/Activities";
import Contact from "@components/Contact";
import PictureGallery from "@components/PictureGallery";
import Legal from "@components/Legal";
import NotFound from "@components/NotFound";

//? TOASTIFY
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const path = window.location.pathname.split('/')[1]

  const validLangs = ["fr", "en", "pt"];
  const currentLang = validLangs.includes(path) ? path : "pt";

  useEffect(() => {
    // If 'lang' is not present in the URL, set it to 'pt'
    if (!currentLang || !validLangs.includes(currentLang)) {
      window.history.replaceState(null, null, '/pt');
    }
  }, [currentLang]);

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <TranslationProvider>
          <Router basename="/">
            <Navigation />
            <Routes>
              <Route path="/:lang/" element={<Main />} exact />
              <Route path="/:lang/about" element={<About />} exact />
              <Route path="/:lang/gallery" element={<PictureGallery />} exact />
              <Route path="/:lang/boat" element={<Boat />} exact />
              <Route path="/:lang/tour" element={<Tour />} exact />
              <Route path="/:lang/activities" element={<Activities />} exact />
              <Route path="/:lang/contact" element={<Contact />} exact />
              <Route path="/:lang/cancellation_policy" element={<Legal />} exact />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </Router>
        </TranslationProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
