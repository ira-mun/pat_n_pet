import Image from "next/image";
import styles from "../styles/CatBreed.module.css";
import Link from "next/link";

const CatBreed = ({ cat }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/pets/cat/${cat._id}`} passHref>
      <div className={styles.item}>
        <Image src={cat.img} alt="" width={200} height={200} />
      <h3 className={styles.title}>{cat.name}</h3>
      </div>
      </Link>
    </div>
  );
};

export default CatBreed;