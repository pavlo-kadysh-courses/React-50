import "./header-menu.css";

export default function HeaderMenuItem({link, text}) {
  return (
    <li className="header-menu-link"><a href={link}>{text}</a></li>
  )
}