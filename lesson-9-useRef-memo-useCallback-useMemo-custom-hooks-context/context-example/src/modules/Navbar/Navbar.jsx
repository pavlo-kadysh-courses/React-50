import useLang from "../../shared/hooks/useLang";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import locale from "./local.json"

const { title } = locale

export default function Navbar() {
  const { lang } = useLang();

  return (
    <nav>
        <LanguageSwitcher />
        <a href="#">logo</a>
        <div>{title[lang]}</div>
    </nav>
  )
}
