import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,setCartItems,food_list,removefromCart,addToCart,getTotalCartAmount}=useContext(StoreContext);
  
  const cart = Object.keys(cartItems).filter(key => cartItems[key] > 0);

  const navigate=useNavigate();

  return (
    <div>
      <h1>Your Cart <img  style={{width:25}}src={assets.cart} alt="cart"/></h1>
   
      {  cart.length===0?(
          <>
            <h2 style={{textAlign: 'center',marginTop:60}}> Your Cart is Empty!</h2>
            <p style={{textAlign: 'center',fontWeight:400}}>There is nothing in your basket.Let's add some.</p>
           </>
        )
        :
        (
            <div className='cart'>
              <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item,index)=>{
                      if(cartItems[item.id]>0)
                        {
                          return(
                            <div>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="fooditem"/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <div className='quantity'>
                                      <img  onClick={()=> removefromCart(item.id)}src={assets.remove_icon_red} alt="removeicon"/>
                                      <p>{cartItems[item.id]}</p>
                                      <img  onClick={()=> addToCart(item.id)}src={assets.add_icon_green} alt="addicongreen"/>
                                    </div>
                                    <p>${item.price*cartItems[item.id]}</p>
                                    <p onClick={()=>setCartItems(prev => ({ ...prev, [item.id]: 0 }))}className='cross'>x</p>
                                </div>
                                <hr/>
                            </div>
                          )
                        }
                  })}
              </div>
                <div className="cart-bottom">
                    <div className="cart-total">
                      <h2>Cart Total</h2>
                      <div>
                          <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                          </div>
                          <hr/>
                          <div className="cart-total-details">
                              <p>Delivery Fee</p>
                              <p>${getTotalCartAmount()===0?0:2}</p>    
                              {/* this condition if we are not putting any contion on cart then we need to display amount */}
                          </div>
                          <hr/>
                          <div className="cart-total-details">
                              <b>Total:</b>
                              <b>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
                          </div>         
                      </div>
                      <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT </button>
                    </div>
                    <div className="cart-promocode">
                          <div>
                              <p>If you have a promo code, Enter it here</p>
                              <div className="cart-promocode-input">
                                <input type="text" placeholder='promo code' />
                                <button>Submit</button>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
        )
      }
    </div>
  );
}

export default Cart
