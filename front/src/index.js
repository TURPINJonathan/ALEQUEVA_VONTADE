import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TranslationProvider from "./TranslationProvider";

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
import Eat from "@components/Eat";
import Activities from "@components/Activities";
import Sleep from "@components/Sleep";
import Contact from "@components/Contact";
import PictureGallery from "@components/PictureGallery";
import Legal from "@components/Legal";
import NotFound from "@components/NotFound";

//? TOASTIFY
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/gallery" element={<PictureGallery />} exact />
          <Route path="/boat" element={<Boat />} exact />
          <Route path="/tour" element={<Tour />} exact />
          <Route path="/eat" element={<Eat />} exact />
          <Route path="/activities" element={<Activities />} exact />
          <Route path="/sleep" element={<Sleep />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/cancellation_policy" element={<Legal />} exact />
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
