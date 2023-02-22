import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ul className={styles.list}>
            <li className={styles.listIcon}>
              <Image src="/../public/img/instagram.png" alt="" width={30} height={30}/>
              </li>
              <li className={styles.listIcon}>
              <Image src="/../public/img/facebook.png" alt="" width={30} height={30}/>
              </li>
              <li className={styles.listIcon}>
              <Image src="/../public/img/youtube.png" alt="" width={38} height={38}/>
              </li>
              <li className={styles.listIcon}>
              <Image src="/../public/img/twitter.png" alt="" width={34} height={34}/>
              </li>   
        </ul>
      </div>
      <div className={styles.item}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <div>Pat&Pet</div>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
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

export default Footer;