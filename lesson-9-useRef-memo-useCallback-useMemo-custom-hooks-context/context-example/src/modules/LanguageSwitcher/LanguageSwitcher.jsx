import useLang from "../../shared/hooks/useLang";
import styles from "./LanguageSwitcher.module.css"

export default function LanguageSwitcher() {
  const { lang, switchLang } = useLang();

  return (
    <div>
        <span onClick={switchLang} className={lang === "ua" ? styles.currentLang : styles.lang }>UA</span>
        |
        <span onClick={switchLang} className={lang === "ru" ? styles.currentLang : styles.lang }>RU</span>
    </div>
  )
}
