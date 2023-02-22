import styles from "../../../styles/MoreInfoCat.module.css";
import React, { useState } from "react";


const MoreInfoCat = ({cat}) => {
    const [infoHistory, setInfoHistory] = useState(styles.hideInfo);
    const [infoCare, setInfoCare] = useState(styles.hideInfo);
    const [infoHealth, setInfoHealth] = useState(styles.hideInfo);
    const [infoDiet, setInfoDiet] = useState(styles.hideInfo);

    const [history, setWideHistory] = useState(styles.shortenHistory);
    const [care, setWideCare] = useState(styles.shortenCare);
    const [health, setWideHealth] = useState(styles.shortenHealth);
    const [diet, setWideDiet] = useState(styles.shortenDiet);

    const [titleHistory, setSmallHistoryTitle] = useState(styles.largeHistoryTitle);
    const [titleCare, setSmallCareTitle] = useState(styles.largeCareTitle);
    const [titleHealth, setSmallHealthTitle] = useState(styles.largeHealthTitle);
    const [titleDiet, setSmallDietTitle] = useState(styles.largeDietTitle);

    const changeHistory = () => {    
      setInfoHistory(styles.showInfo);
      setInfoCare(styles.hideInfo);
      setInfoHealth(styles.hideInfo);
      setInfoDiet(styles.hideInfo);

      setWideHistory(styles.widenHistory);
      setWideCare(styles.shortenCare);
      setWideHealth(styles.shortenHealth);
      setWideDiet(styles.shortenDiet);

      setSmallHistoryTitle(styles.smallHistoryTitle);
      setSmallCareTitle(styles.largeCareTitle);
      setSmallHealthTitle(styles.largeHealthTitle);
      setSmallDietTitle(styles.largeDietTitle);
    };
    const changeCare = () => {    
        setInfoHistory(styles.hideInfo);
        setInfoCare(styles.showInfo);
        setInfoHealth(styles.hideInfo);
        setInfoDiet(styles.hideInfo);

        setWideHistory(styles.shortenHistory);
        setWideCare(styles.widenCare);
        setWideHealth(styles.shortenHealth);
        setWideDiet(styles.shortenDiet);  

        setSmallHistoryTitle(styles.largeHistoryTitle);
        setSmallCareTitle(styles.smallCareTitle);
        setSmallHealthTitle(styles.largeHealthTitle);
         setSmallDietTitle(styles.largeDietTitle);
    };
    const changeHealth = () => {  
        setInfoHistory(styles.hideInfo);
        setInfoCare(styles.hideInfo);
        setInfoHealth(styles.showInfo);
        setInfoDiet(styles.hideInfo);

        setWideHistory(styles.shortenHistory);
        setWideCare(styles.shortenCare);
        setWideHealth(styles.widenHealth);
        setWideDiet(styles.shortenDiet);

        setSmallHistoryTitle(styles.largeHistoryTitle);
      setSmallCareTitle(styles.largeCareTitle);
      setSmallHealthTitle(styles.smallHealthTitle);
      setSmallDietTitle(styles.largeDietTitle);
    };
    const changeDiet = () => {    
        setInfoHistory(styles.hideInfo);
        setInfoCare(styles.hideInfo);
        setInfoHealth(styles.hideInfo);
        setInfoDiet(styles.showInfo);

        setWideHistory(styles.shortenHistory);
        setWideCare(styles.shortenCare);
        setWideHealth(styles.shortenHealth);
        setWideDiet(styles.widenDiet);

        setSmallHistoryTitle(styles.largeHistoryTitle);
      setSmallCareTitle(styles.largeCareTitle);
      setSmallHealthTitle(styles.largeHealthTitle);
      setSmallDietTitle(styles.smallDietTitle);
    };

   
     return (
        <div className={styles.container}>
       <div className={styles.item}>
       <ul className={styles.list}>
            <li className={history} onClick={changeHistory} >
                <div className={styles.align}>
                <h3 className={titleHistory}>HISTORY</h3>
                <div className={infoHistory}>
                {cat.history.map((i) => (
                  <div>{i}
                  <div className={styles.dot}>{'.\n'}</div>
                  </div>
                 ))}
                </div>
                </div>
                </li>
            <li className={care} onClick={changeCare}>
                <div className={styles.align}>
                <h3 className={titleCare}>CARE</h3>
                <div className={infoCare}>
                {cat.care.map((i) => (
                  <div>{i}
                  <div className={styles.dot}>{'.\n'}</div>
                  </div>
                 ))}
                </div>
                </div>
                </li>
            <li className={health} onClick={changeHealth}>
                <div className={styles.align}>
                <h3 className={titleHealth}>HEALTH</h3>
                <div className={infoHealth}>
                {cat.health.map((i) => (
                  <div>{i}
                  <div className={styles.dot}>{'.\n'}</div>
                  </div>
                 ))}
                </div>
                </div>
                </li>
            <li className={diet} onClick={changeDiet}>
                <div className={styles.align}>
                <h3 className={titleDiet}>DIET</h3>
                <div className={infoDiet}>
                {cat.diet.map((i) => (
                  <div>{i}
                  <div className={styles.dot}>{'.\n'}</div>
                  </div>
                 ))}
                </div>
                </div>
                </li>
        </ul>
       </div>
       </div>
        );
    };
    export default MoreInfoCat;