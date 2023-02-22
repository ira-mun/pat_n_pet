import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useState } from "react";

const HeaderDogs = () => {
  const [index, setIndex] = useState(0);
  const images = [(
    <div className={styles.mainline}>
    <h1 className={styles.main_name}>Facts about your Dog</h1>
    <h2 className={styles.main_name}>Swipe right to find them out</h2>
    </div>
  )
  ,
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №1</h2>
    <div className={styles.subtitle}>
    Dogs' sense of smell is at least 40x better than ours.
    </div>
    <div className={styles.picture_candy}>
    <Image src="/../public/img/nose.png" alt="" width="130" height="130"/>  </div>
    </div>
    </div>
    
  )
  ,
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №2</h2>
    <div className={styles.subtitle}>
    Some dogs are fast and could even beat a cheetah.
    </div>
    <div className={styles.picture_speed}>
    <Image src="/../public/img/speed.png" alt="" width="150" height="130"/>  </div>
    </div>
    </div>
    
  ),
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №3</h2>
    <div className={styles.subtitle}>
    Your dog could be left or right-pawed.
    </div>
    <div className={styles.picture_dogpaw}>
    <Image src="/../public/img/dogpaw.png" alt="" width="100" height="140"/>  </div>
    </div>
    </div>
    
  ),
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №4</h2>
    <div className={styles.subtitle}>
    Along with dogs' noses, their hearing is super sensitive.
    </div>
    <div className={styles.picture_ears}>
    <Image src="/../public/img/ears.png" alt="" width="160" height="130"/>  </div>
    </div>
    </div>
    
  ),
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №5</h2>
    <div className={styles.subtitle}>
    Dogs are about as intelligent as a two-year-old.
    </div>
    <div className={styles.picture_toddler}>
    <Image src="/../public/img/toddler.png" alt="" width="130" height="140"/>  </div>
    </div>
    </div>
    
  )
  ];
  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 5)
      }
      if(direction==="r"){
          setIndex(index !== 5 ? index+1 : 0)
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
export default HeaderDogs;