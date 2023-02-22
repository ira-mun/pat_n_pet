import styles from "../styles/ChooseDog.module.css";
import Link from "next/link";

const ChooseDog = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href="/pets/dogs" passHref>
                <div className={styles.shadow}>
                </div>
                 <div className={styles.dog}>
                 <div className={styles.ears}></div>
                 <div className={styles.ear1}></div>
                 <div className={styles.ear2}></div>
                 <div className={styles.eyes}></div>
                 <div className={styles.bottom}></div>
                 <div className={styles.nose}>
                     </div>
                <div className={styles.bone}>
                <div className={styles.boneDetails}></div>
                </div>
                 </div>
                 
            </Link>
        </div>

    );
};

export default ChooseDog;