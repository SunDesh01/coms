import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <>
   <footer>
  <div className="footer-section company-info">
    <h1>ECOMUS</h1>
    <ul>
        <p>Ecomus Ltd is a KTM-based agency specializing in e-commerce website development and digital marketing with over 2years of experience. ​ </p>



    </ul>
  
  </div>
  <div className="footer-section contact-info">
    <h4>Contact Us</h4>
    <p>Address: ShantinagarKathmandu 44600
    </p>
    <p>Phone: +977 9819938900</p>
    <p>Email: ecomus@company.com</p>
 
  </div>
  <div className="footer-section quick-links">
    <h4>Quick Links</h4>
    <ul>
      <li><a href="/about-us">New Arrivals</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/careers">Best Sellers</a></li>
    </ul>
  </div>
  <div className="footer-section legal">
    <h4>Legal</h4>
    <ul>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/terms-of-service">Terms of Service</a></li>
      <li><a href="/cookie-policy">Cookie Policy</a></li>
    </ul>
  </div>
  <div className="footer-section social-media">
    <h4>Follow Us</h4>
    <a href="https://www.facebook.com/profile.php?id=100008722600928" target="_blank">Facebook</a>
    <a href="https://github.com/SunDesh01" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/shah-sandesh-aa014b266/" target="_blank">LinkedIn</a>
    <a href="https://www.instagram.com/shahsandesh123/" target="_blank">Instagram</a>
  </div>
  <div className="footer-section newsletter">
    <h4>Ecomus</h4>
    <p>Subscribe to our Ecomus for updates and special offers.</p>
    <form action="/subscribe" method="post">
      <input type="email" name="email" placeholder="Your email address"/>
      <button type="submit">Subscribe</button>
    </form>
  </div>
  
</footer>


    </>
  )
}

export default Footer
