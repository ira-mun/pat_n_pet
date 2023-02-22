import DisplayDogBreeds from "@/components/DisplayDogBreeds";
import HeaderDogs from "../../components/HeaderDogs";
import axios from "axios";

const Dogs = ({dogBreeds}) => {
    return (
        <div>
        <HeaderDogs/>
        <DisplayDogBreeds dogBreeds={dogBreeds}/>
            </div>
    );
};
export default Dogs;

export const getServerSideProps = async () => {


    const res = await axios.get("http://localhost:3000/api/dogs");
    return {
      props: {
        dogBreeds: res.data
      },
    };
  };