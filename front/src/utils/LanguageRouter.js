import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageRouter = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = location.pathname.split("/")[1];

  const changeLanguage = (newLang) => {
    const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath);
  };

  return <>{children(changeLanguage)}</>;
};

export default LanguageRouter;
