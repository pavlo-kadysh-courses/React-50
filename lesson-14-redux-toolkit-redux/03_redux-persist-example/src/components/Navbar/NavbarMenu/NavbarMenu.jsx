import { NavLink } from "react-router-dom";
import items from "./items";
import styles from "./navbar-menu.module.scss";

const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
}

export default function NavbarMenu() {
  const elements = items.map(({id, to, text}) => {
    if (to.includes("/products")) {
      return (
          <li key={id}>
              <NavLink className={getClassName} to={to}>{text}</NavLink>
          </li>
      )
    }
    return (
        <li key={id}>
            <NavLink className={getClassName} to={to} end>{text}</NavLink>
        </li>
    )
  })

  return (
    <ul className={styles.menu}>
     {elements}   
    </ul>
  )
}
