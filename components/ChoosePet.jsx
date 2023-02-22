import Image from "next/image";
import styles from "../styles/ChoosePet.module.css";
import Link from "next/link";
import ChooseCat from "./ChooseCat"
import ChooseDog from "./ChooseDog"

const ChoosePet = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose your pet</h2>
    <div className={styles.wrapper}>
    <ul className={styles.list}>
       <li className={styles.listItem}>
          <ChooseCat/>
          </li>
          <li className={styles.listItem}>
          <ChooseDog/>
          </li>
        </ul>
    </div>
  </div>
    );
};

export default ChoosePet;