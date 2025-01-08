import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '@/locales/en.json';
import translationRU from '@/locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
