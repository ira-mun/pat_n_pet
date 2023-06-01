import styles from "../styles/Add.module.css";

const AddButtonDog = ({ setCloseDog }) => {
  return (
    <div onClick={() => setCloseDog(false)} className={styles.mainAddButton}>
      Add New Dog
    </div>
  );
};

export default AddButtonDog;