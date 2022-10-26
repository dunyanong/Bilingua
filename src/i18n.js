import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // language resources
    resources: {
      en: {
        translation: {
         welcome: "Hello I am smart"
        }
      },
      cn: {
        translation: {
         welcome: "你好， 我很聪明"
        }
      },
    }
  });

export default i18n;