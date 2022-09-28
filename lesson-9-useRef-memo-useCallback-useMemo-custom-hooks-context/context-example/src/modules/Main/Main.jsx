import useLang from "../../shared/hooks/useLang";
import locale from "./locale.json"
const { title, content } = locale;

export default function Main() {
  const { lang } = useLang();

  return (
    <div>
        <h2>{title[lang]}</h2>
        <p>{content[lang]}</p>
    </div>
  )
}
