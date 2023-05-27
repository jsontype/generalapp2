import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en"
import ko from "./locales/ko"
import ja from "./locales/ja"

i18n
  .use(initReactI18next) // i18n을 리액트에서 사용하겠다.
  .init({
    resources: {
      en,
      ko,
      ja,
    },
    lng: "ko", // 언어 디텍터를 사용한 경우
    // lng: navigator.language, // 언어 디텍터를 사용한 경우
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
