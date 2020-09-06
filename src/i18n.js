import esTranslationMessages from './translations/es.json';
import enTranslationMessages from './translations/en.json';

export const DEFAULT_LOCALE = 'es';

export const appLocales = ['en', 'es'];

const translationMessages = {
  en: enTranslationMessages,
  es: esTranslationMessages,
};

export default translationMessages;
