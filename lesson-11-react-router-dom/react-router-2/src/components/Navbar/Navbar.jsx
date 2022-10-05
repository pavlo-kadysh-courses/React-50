import { Link } from "react-router-dom";
import styles from './navbar.module.scss';
import NavbarMenu from "./NavbarMenu/NavbarMenu";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className="container">
            <div className={styles.row}>
             <Link to="/">Logo</Link>
             <NavbarMenu />
             <span>Cart:</span>
            </div>
        </div>
    </nav>
  )
}
