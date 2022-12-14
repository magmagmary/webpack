/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishResource from '../assets/locales/en/translation.json';

const DEFAULT_LANGUAGE = 'en';
const DEFAULT_NAMESPACE = 'translations';

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  ns: [DEFAULT_NAMESPACE],
  defaultNS: DEFAULT_NAMESPACE,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: { [DEFAULT_LANGUAGE]: { [DEFAULT_NAMESPACE]: englishResource } },
});

export default i18n;
