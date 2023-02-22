import styles from "../styles/DisplayCatBreed.module.css";
import DogBreed from "./DogBreed";
import Image from "next/image";
import { useState } from "react";

const DisplayDogBreed = ({ dogBreeds }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>Choose the breed</h1>
      <div className={styles.swiper}>
     
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
      {dogBreeds.map((dog) => (
          <DogBreed key={dog._id} dog={dog} />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default DisplayDogBreed;