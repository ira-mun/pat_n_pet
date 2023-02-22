import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useState } from "react";

const HeaderCats = () => {
  const [index, setIndex] = useState(0);
  const images = [(
    <div className={styles.mainline}>
    <h1 className={styles.main_name}>Facts about your KittyCat</h1>
    <h2 className={styles.main_name}>Swipe right to find them out</h2>
    </div>
  )
  ,
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №1</h2>
    <div className={styles.subtitle}>
    Cats are believed to be the only mammals who don’t taste sweetness.
    </div>
    <div className={styles.picture_candy}>
    <Image src="/../public/img/candy.png" alt="" width="130" height="130"/>  </div>
    </div>
    </div>
    
  )
  ,
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №2</h2>
    <div className={styles.subtitle}>
    Cats have whiskers on the backs of their front legs, as well.
    </div>
    <div className={styles.picture}>
    <Image src="/../public/img/whiskers.png" alt="" width="200" height="170"/>  </div>
    </div>
    </div>
    
  ),
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №3</h2>
    <div className={styles.subtitle}>
    Cats have the largest eyes relative to their head size of any mammal.
    </div>
    <div className={styles.picture}>
    <Image src="/../public/img/eyes.png" alt="" width="300" height="130"/>  </div>
    </div>
    </div>
    
  ),
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №4</h2>
    <div className={styles.subtitle}>
    Cats will refuse an unpalatable food to the point of starvation.
    </div>
    <div className={styles.picture}>
    <Image src="/../public/img/meat.png" alt="" width="160" height="160"/>  </div>
    </div>
    </div>
    
  ),
  (
    <div className={styles.headline}>
    <div className={styles.text_cat}>
    <h2 className={styles.title_name}>Fact №5</h2>
    <div className={styles.subtitle}>
    Some cats can swim.
    </div>
    <div className={styles.picture}>
    <Image src="/../public/img/swim.png" alt="" width="130" height="150"/>  </div>
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
export default HeaderCats;