import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";

const AddCat = ({ setCloseCat }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const [personality, setPersonality] = useState(null);
  const [weight, setWeight] = useState(null);
  const [length, setLength] = useState(null);
  const [coat, setCoat] = useState(null);
  const [coatColor, setCoatColor] = useState(null);
  const [eyeColor, setEyeColor] = useState(null);
  const [lifeExpectancy, setLifeExpectancy] = useState(null);
  const [history, setHistory] = useState([]);
  const [care, setCare] = useState([]);
  const [health, setHealth] = useState([]);
  const [diet, setDiet] = useState([]);


  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dwtnqsu3y/image/upload",
        data
      ); 

      const { url } = uploadRes.data;
      const newCat = {
        name,
        img: url,
        img2: url,
        personality,
        weight,
        length,
        coat,
        coatColor,
        eyeColor,
        lifeExpectancy,
        history,
        care,
        health,
        diet
      };

      await axios.post("http://localhost:3000/api/cats", newCat);
      setCloseCat(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setCloseCat(true)} className={styles.close}>
          X
        </span>
        <div>
        <h1>Add a new Cat</h1>
        </div>
        <div className={styles.area}>
        <div className={styles.left}>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}></div>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Personality</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setPersonality(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Weight</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Length</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Coat</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setCoat(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Coat color</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setCoatColor(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Eye color</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setEyeColor(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Life expectancy</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setLifeExpectancy(e.target.value)}
          />
        </div>
        </div>
        <div className={styles.right}>

        <div className={styles.item}>
          <label className={styles.label}>History</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setHistory(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Care</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setCare(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Health</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setHealth(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Diet</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDiet(e.target.value)}
          />
        </div>
        </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default AddCat;