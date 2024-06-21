import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext);

  
    return (
    <div className='food-display' id='food-display'>
        <h2> Top Dishes near you</h2>
        <div className='food-display-list'>
           {food_list.map((fooditem,index)=>{
            if(category==="All" || category===fooditem.category){
                return <FoodItem key={index} id={fooditem.id} name={fooditem.name} description={fooditem.description} price={fooditem.price} image={fooditem.image}/>
            }
                
           })} 
           
        </div>
      
    </div>
  )
}

export default FoodDisplay
