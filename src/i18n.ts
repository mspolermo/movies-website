import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationRu from './locales/ru/translationRu.json'
import translationEN from './locales/en/translationEn.json'



i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ru',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
            translation: translationEN
        },
        ru: {
            translation: translationRu
        }
    }
  });


export default i18n;


