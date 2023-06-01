import styles from "../styles/Add.module.css";

const AddButtonCat = ({ setCloseCat }) => {
  return (
    <div onClick={() => setCloseCat(false)} className={styles.mainAddButton}>
      Add New Cat
    </div>
  );
};

export default AddButtonCat;