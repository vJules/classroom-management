import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
