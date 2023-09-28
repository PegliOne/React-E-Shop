import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar__heading}>Retro Video Games E-Shop</h1>
      <ul className={styles.navbar__list}>
        <Link className={styles.list__link} to="/">
          <li className={styles.list__text}>View Games</li>
        </Link>
        <Link className={styles.list__link} to="/cart">
          <li className={styles.list__text}>View Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
