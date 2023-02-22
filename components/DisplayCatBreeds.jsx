import styles from "../styles/DisplayCatBreed.module.css";
import CatBreed from "./CatBreed";
import Image from "next/image";
import { useState } from "react";

const DisplayCatBreed = ({ catBreeds }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>Choose the breed</h1>
      <div className={styles.swiper}>
     
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
      {catBreeds.map((cat) => (
          <CatBreed key={cat._id} cat={cat} />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default DisplayCatBreed;