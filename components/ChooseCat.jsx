import styles from "../styles/ChooseCat.module.css";
import Link from "next/link";

const ChooseCat = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href="/pets/cats" passHref>
                <div className={styles.shadow}>
                </div>
                 <div className={styles.cat}>
                 <div className={styles.ears}></div>
                 <div className={styles.eyes}></div>
                 <div className={styles.bottom}></div>
                 <div className={styles.nose}>
                     </div>
                <div className={styles.ball}>
                </div>
                 </div>
                 
            </Link>
        </div>

    );
};

export default ChooseCat;