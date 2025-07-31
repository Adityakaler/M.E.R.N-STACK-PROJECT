import React from 'react'
import "./Footer.css"

const Footer = () => {
     
     return (
          <div className="footer">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />{/*Fontawsome link */}
               
               <div className="footerheading">
                    <h2>Our page has come to an end, but our <br />relationship with you has not.</h2>
                    <p>Stay sustainable and subscribe now</p>
                    <input type="text" placeholder="Enter Your E-Mail Address" className="emailbox" />
                    <button className="button">Subscribe</button>
               </div>
               <div className="footermain">
                    <div className="footerbox1">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13721.899623369856!2d76.7062450871582!3d30.705046900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee885f664995%3A0xec6e231184b7c6e6!2sArun%20Shoes!5e0!3m2!1sen!2sin!4v1742195442029!5m2!1sen!2sin" width={250} height={300} style={{ "border": "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="footerbox2">
                         <h3>INFORMATION</h3>
                         <ul type="none">
                              <li>Track Your Order</li>
                              <li>Contact us</li>
                              <li>Brand Impact</li>
                              <li>Our Stores</li>
                              <li>Press</li>
                              <li>Blog</li>
                              <li>FAQ</li>
                         </ul>
                    </div>
                    <div className="footerbox3">
                         <h3>GUIDES</h3>
                         <ul type="none">
                              <li>Shedule a Return/Exchange</li>
                              <li>Shoe Care</li>
                              <li>Returns Policy</li>
                              <li>Privacy Policy</li>
                              <li>Cookie Policy</li>
                              <li>Terms &amp; Conditions</li>
                         </ul>
                    </div>
                    <div className="footerbox4">
                         <h3>Details</h3>
                         <ul type="none">
                              <li>Shoes</li>
                              <li>Men</li>
                              <li>Women</li>
                              <li>All Products</li>
                              <li>Men Shoes</li>
                         </ul>
                    </div>
               </div>
               <hr style={{ "width": "90%", "-webkit-text-align": "center", "text-align": "center" }} />
               <div className="contact">
                    <div className="contactbox1">
                         <p>CONTACT US-</p>
                         <p>WhatsApp: +91 98******00</p>
                         <p>(9:30AM to 9:00PM)</p>
                    </div>
                    <div className="contactbox2">
                         <i className="fa-brands fa-instagram fa-2xl" />&nbsp;&nbsp;&nbsp;&nbsp;
                         <i className="fa-brands fa-facebook fa-2xl" />&nbsp;&nbsp;&nbsp;&nbsp;
                         <i className="fa-brands fa-youtube fa-2xl" />&nbsp;&nbsp;&nbsp;&nbsp;
                         <i className="fa-brands fa-linkedin fa-2xl" />
                    </div>
               </div>
               <div className="footerend">
                    <p><i className="fa-regular fa-registered fa-xl" style={{ "color": "#ffffff" }} />&nbsp;<span>All Copyright Reserved </span><i className="fa-regular fa-copyright fa-xl" style={{ "color": "#ffffff" }} />&nbsp;<span>adityakaler2025</span></p>
               </div>
               <div className="topup1" data-aos="fade-up">
                    <button className="topup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                         <i className="fa-solid fa-arrow-turn-up" />
                    </button>
               </div>

          </div>
  
)};

export default Footer;
