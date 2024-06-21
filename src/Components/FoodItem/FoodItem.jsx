import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import { StoreContext } from '../../Context/StoreContext';

//alt + arrow keys to move code up and down
const FoodItem = ({id,name,price,description,image}) => {
 

 
  const {cartItems,addToCart,removefromCart}=useContext(StoreContext);
  console.log( "item",cartItems);
 
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="food-image"/>
                {
                    !cartItems[id]?<img  className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="addiconwhite"/>
                    :<div className='food-item-counter'>
                        <img  onClick={()=> removefromCart(id)}src={assets.remove_icon_red} alt="removeicon"/>
                        <p>{cartItems[id]}</p>
                        <img  onClick={()=> addToCart(id)}src={assets.add_icon_green} alt="addicongreen"/>
                    </div>
            
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="ratings"/>

                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
