import { Link } from 'react-router-dom';

import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from './NavbarAuth/NavbarAuth';

import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    <NavbarAuth />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;