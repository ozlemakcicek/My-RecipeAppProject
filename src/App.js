

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import { Header } from "./pages/login/LoginStyles";
import RecipeCard from "./pages/home/RecipeCard";

function App() {
  return (
<div>
        <Router> 
       <Navbar /> 

         <Routes>
<Route exact path ="/" element={<Login/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/header" element={<Header/>}/>
<Route path="/recipecard" element={<RecipeCard/>}/>






 </Routes>

    
      <Footer />    
    </Router>  

    </div>
  );
};

export default App;
