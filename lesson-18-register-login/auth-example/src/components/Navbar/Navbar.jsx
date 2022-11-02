import { Link } from 'react-router-dom';

import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import useAuth from '../../shared/hooks/useAuth';

import styles from "./navbar.module.scss";

const Navbar = () => {
    const isLogin = useAuth();

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    {isLogin && <NavbarMenu />}
                    {isLogin ? <NavbarUser /> : <NavbarAuth />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;