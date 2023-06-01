import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import AddCat from "../../components/AddCat";
import AddDog from "../../components/AddDog";
import AddButtonCat from "../../components/AddButtonCat";
import AddButtonDog from "../../components/AddButtonDog";

const Index = ({ cats, dogs }) => {
  const [catList, setCatList] = useState(cats);
  const [dogList, setDogList] = useState(dogs);

  const handleDeleteCat = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/cats/" + id
      );
      setCatList(catList.filter((cat) => cat._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteDog = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/dogs/" + id
      );
      setCatList(dogList.filter((dog) => dog._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const [closeCat, setCloseCat] = useState(true);
  const [closeDog, setCloseDog] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>
        <h1 className={styles.title}>Cats</h1>
        </div>
        <div>
      {<AddButtonCat setCloseCat={setCloseCat} />}
      {!closeCat && <AddCat setCloseCat={setCloseCat} />}
      </div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </tbody>
          {catList.map((cat) => (
            <tbody key={cat._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={cat.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{cat._id.slice(0, 5)}...</td>
                <td>{cat.name}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleDeleteCat(cat._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Dogs</h1>
        {<AddButtonDog setCloseDog={setCloseDog} />}
      {!closeDog && <AddDog setCloseDog={setCloseDog} />}
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </tbody>
          {dogList.map((dog) => (
            <tbody key={dog._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={dog.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{dog._id.slice(0, 5)}...</td>
                <td>{dog.name}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleDeleteDog(dog._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const catRes = await axios.get("http://localhost:3000/api/cats");
  const dogRes = await axios.get("http://localhost:3000/api/dogs");

  return {
    props: {
      cats: catRes.data,
      dogs: dogRes.data,
    },
  };
};

export default Index;