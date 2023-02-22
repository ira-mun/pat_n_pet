import DisplayCatBreeds from "@/components/DisplayCatBreeds";
import HeaderCats from "../../components/HeaderCats";
import axios from "axios";

const Cats = ({catBreeds}) => {
    return (
        <div>
        <HeaderCats/>
        <DisplayCatBreeds catBreeds={catBreeds}/>
            </div>
    );
};
export default Cats;

export const getServerSideProps = async () => {


    const res = await axios.get("http://localhost:3000/api/cats");
    return {
      props: {
        catBreeds: res.data
      },
    };
  };