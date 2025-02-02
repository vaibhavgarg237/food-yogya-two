import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className="footer" id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img className='footer-logo' src={assets.StonzyLogo} alt="" />
                <p>We pride ourselves on using fresh ingredients and crafting flavors that delight every taste bud. With quick delivery and an easy-to-use platform, enjoying your favorite meals has never been simpler. Experience the perfect blend of quality, convenience, and taste with every order!</p>
                <div className="footer-social-items">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>StonyzPizza</h2>
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>Phone Number :- 9059309494</li>
                    <li>Email Id :- hr.stonyzPizza@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">CopyRight 2025 © StonyzPizza.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
