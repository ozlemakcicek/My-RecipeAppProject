// import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './HeaderStyles';
import { useNavigate } from 'react-router-dom'



const Header = () => {
const navigate=useNavigate()




  return (
  
   <HeaderContainer>
<MainHeader>FOOD APP</MainHeader>

      <FormContainer>
         <FoodInput type="text" placeholder='Search' />
         <Button onClick={()=>navigate("/RecipeCard")}>Search</Button>
     
        <Select name="" id="">
           <option value="">Lunch</option>
           <option value="breakfast">Breakfast</option>
          <option value="tea time">Tea Time</option>
         
        </Select>
      
      </FormContainer>



</HeaderContainer>

  )
}

export default Header
