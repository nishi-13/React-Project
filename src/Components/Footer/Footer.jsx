import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
         <div className="footer-content-left">
            <img src={assets.logo} alt="logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reiciendis iusto voluptas nostrum dolore ducimus consequatur unde sit voluptate et. Nesciunt sapiente, fugit facere illo harum voluptatum in cumque perferendis.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
         </div> 
         <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>

         </div>
         <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li>+91 74389-33664</li>
                  <li> contact@tomato.com</li>
                </ul>
         </div>  
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
