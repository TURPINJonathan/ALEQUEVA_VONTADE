import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Fr from '@translations/fr.json';
import Pt from '@translations/pt.json';

// Traductions pour différentes langues
const resources = {
  pt: { translation: Fr },
  fr: { translation: Pt },
};

// Configuration de i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', // Langue par défaut
  fallbackLng: 'fr', // Langue de secours si la traduction n'est pas disponible
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
