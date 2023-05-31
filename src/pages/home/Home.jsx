
import Header from "../../components/header/Header"
import RecipeCard from "./RecipeCard"
import { HomeImg, ImgDiv} from './HomeStyles'
import homeSvg from "../../assets/home.svg"
import { useEffect, useState } from "react"
import axios from "axios"


const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
 
const[yemekler, setYemekler]=useState([])

  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${"pie"}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${"breakfast"}`;

useEffect(()=>{

const getVeri= async()=>{
const res= await axios.get(url);
setYemekler(res.data)
// console.log(res.data);

};
getVeri();

},[])
console.log(yemekler);


 return (
  <div>
 
  <Header />
     
  {[yemekler].length>1 ? (
     <div>
            <RecipeCard />
           
        </div>
   
       
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}



      
   </div>
  );
}

export default Home