import Image from "next/image";
import styles from "../styles/Navbar.module.css";
//import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
 // const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
        <Link href="/" passHref>
          <div>Pat&Pet</div>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/aboutus" passHref>
            <li className={styles.listItem}>About Us</li>
          </Link>
          <Link href="/contacts" passHref>
            <li className={styles.listItem}>Contacts</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;