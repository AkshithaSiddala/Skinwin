import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>SkinWin</h1>
                <p>Step into a world of skincare luxury and experience the art of dermatology with SkinWin.</p>
            </div>
            <div className="footer-content-center">
                <div className="socialmedia-icons">
                    <img src="./facebook-logo-circular-shape_44646.png" alt="" />
                    <img src="./social_15522223.png" alt="" />
                    <img src="./record-button_4186878.png" alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Contact Us</h2>
                <p>SkinWin, Green heights Complex, Madhapur, Hyderabad, 500105</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
