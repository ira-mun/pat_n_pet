import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useState } from "react";

const Header = () => {
  const [index, setIndex] = useState(0);
  const images = [(
    <div className={styles.headline}>
    <div className={styles.text}>
    <h1 className={styles.title_name}>Your furry friend</h1>
    <div className={styles.subtitle}>Too often, pet owners have questions about the specifics of caring for their pet, so we decided to collect all the important information about your four-legged friend to make its life as enjoyable as possible.</div>
    </div>
    <div className={styles.picture}>
    <Image src="/../public/img/paw.png" alt=""  width={200} height={200}/>
      </div>
    </div>
  )
  ,
  (
    <div className={styles.headline}>
    <div className={styles.text}>
    <h1 className={styles.title_name}>Useful Information</h1>
    <div className={styles.subtitle}>Here you can learn everything about your pet, from the history of the origin of the breed to all the peculiarities of caring for your furry friend
      </div>
    </div>
    <div className={styles.picture}>
    <Image src="/../public/img/bone.png" alt="" width="200" height="200"/>  </div>
    </div>
  )
  ];
  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 1)
      }
      if(direction==="r"){
          setIndex(index !== 1 ? index+1 : 0)
      }
  }
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/../public/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            {img}
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/../public/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};
export default Header;