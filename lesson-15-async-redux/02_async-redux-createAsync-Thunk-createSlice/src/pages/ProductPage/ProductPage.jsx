import { NavLink, Outlet } from "react-router-dom";
import styles from "./product-page.module.scss";

const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function ProductPage() {
  return (
    <>
        <h1>Product Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro officia cumque eum. Porro, blanditiis tempore quo, minima ipsa sapiente quasi, at sint perferendis eius aspernatur qui nesciunt rerum nemo facere!</p>
        <ul className={styles.menu}>
            <li><NavLink to={'list'} className={getClassName} >List</NavLink></li>
            <li><NavLink to={'add'} className={getClassName} >Add</NavLink></li>
            <li><NavLink to={'search'} className={getClassName} >Search</NavLink></li>
        </ul>
        <Outlet/>
    </>
  )
}
