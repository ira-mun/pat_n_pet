import Image from "next/image";
import styles from "../styles/DogBreed.module.css";
import Link from "next/link";

const DogBreed = ({ dog }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/pets/dog/${dog._id}`} passHref>
      <div className={styles.item}>
        <Image src={dog.img} alt="" width={200} height={200} />
      <h3 className={styles.title}>{dog.name}</h3>
      </div>
      </Link>
    </div>
  );
};

export default DogBreed;