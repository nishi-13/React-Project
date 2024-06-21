import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export  const StoreContext= createContext();


const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("FoodCart"))||[]);


    useEffect(()=>{
        localStorage.setItem("FoodCart",JSON.stringify(cartItems));
    },[cartItems]);

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
       
    }

    const removefromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount=()=>{
        let amount=0;
        for ( const item in cartItems){
            if(cartItems[item]>0){
                const itemInfo= food_list.find((product)=>product.id===item)
                amount+=itemInfo.price*cartItems[item];
            }

        }
    return amount;
    }


    const contextValue={
        food_list,
        addToCart,
        removefromCart,
        cartItems,
        setCartItems,
        getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider;