import styles from "../../../styles/Dog.module.css";
import Image from "next/image";
import { useState } from "react";
import {useEffect} from "react";
import axios from "axios";
import MoreInfoDog from "./MoreInfoDog";
import Eyes from "./Eyes";

const Dog = ({ dog }) => {
  
  return (
    <div className={styles.main}>
       <Eyes/>  
    <div className={styles.container}>
       <div className={styles.item}>
      <div className={styles.left}>
      <h1 className={styles.title}>{dog.name}</h1>
        <div className={styles.info}>
        <ul className={styles.list}>
            <li className={styles.listItem}>
            <div className={styles.key}>PERSONALITY: </div>
            <div className={styles.value}>{dog.personality}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>WEIGHT: </div>
            <div className={styles.value}>{dog.weight}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>HEIGHT: </div>
            <div className={styles.value}>{dog.length}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>COAT: </div>
            <div className={styles.value}>{dog.coat}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>COAT COLOR: </div>
            <div className={styles.value}>{dog.coatColor}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>EYE COLOR: </div>
            <div className={styles.value}>{dog.eyeColor}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>LIFE EXPECTANCY: </div>
            <div className={styles.value}>{dog.lifeExpectancy}</div>
              </li>
        </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.round}> 
        <Image className={styles.picture}  src={dog.img2} alt="" width={300} height={300} />     
        </div>    
      </div>
    </div>
    </div>
    <div className={styles.catArea}>
    </div>
    
    <MoreInfoDog dog={dog}/> 
    </div>
    
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/dogs/${params.id}`
  );
  return {
    props: {
      dog: res.data,
    },
  };
};

export default Dog;