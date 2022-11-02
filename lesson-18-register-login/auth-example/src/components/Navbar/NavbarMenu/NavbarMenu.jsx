import { NavLink } from "react-router-dom";

import styles from "./navbar-menu.module.scss";

import items from "./items"

const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const NavbarMenu = () => {
    const elements = items.map(({id, to, text}) => (
        <li key={id}>
            <NavLink className={getClassName} to={to}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={styles.menu}>
           {elements}
        </ul>
    )
}

export default NavbarMenu;