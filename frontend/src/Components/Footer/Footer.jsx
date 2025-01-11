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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci quae dolorem. Non illo, blanditiis repellat temporibus tempore delectus accusamus in mollitia debitis dolore! Amet praesentium ipsa velit eaque fuga.</p>
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
                    <li>Phone Number</li>
                    <li>Email Id</li>
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
