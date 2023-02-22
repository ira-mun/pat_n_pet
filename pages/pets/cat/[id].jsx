import styles from "../../../styles/Cat.module.css";
import Image from "next/image";
import { useState } from "react";
import {useEffect} from "react";
import axios from "axios";
import MoreInfoCat from "./MoreInfoCat";
import Eyes from "./Eyes";

const Cat = ({ cat }) => {
  
  return (
    <div className={styles.main}>
       <Eyes/>  
    <div className={styles.container}>
       <div className={styles.item}>
      <div className={styles.left}>
      <h1 className={styles.title}>{cat.name}</h1>
        <div className={styles.info}>
        <ul className={styles.list}>
            <li className={styles.listItem}>
            <div className={styles.key}>PERSONALITY: </div>
            <div className={styles.value}>{cat.personality}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>WEIGHT: </div>
            <div className={styles.value}>{cat.weight}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>LENGTH: </div>
            <div className={styles.value}>{cat.length}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>COAT: </div>
            <div className={styles.value}>{cat.coat}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>COAT COLOR: </div>
            <div className={styles.value}>{cat.coatColor}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>EYE COLOR: </div>
            <div className={styles.value}>{cat.eyeColor}</div>
              </li>
              <li className={styles.listItem}>
            <div className={styles.key}>LIFE EXPECTANCY: </div>
            <div className={styles.value}>{cat.lifeExpectancy}</div>
              </li>
        </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.round}> 
        <Image className={styles.picture}  src={cat.img2} alt="" width={300} height={300} />     
        </div>    
      </div>
    </div>
    </div>
    <div className={styles.catArea}>
    </div>
    
    <MoreInfoCat cat={cat}/> 
    </div>
    
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/cats/${params.id}`
  );
  return {
    props: {
      cat: res.data,
    },
  };
};

export default Cat;