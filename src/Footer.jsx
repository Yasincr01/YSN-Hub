import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div id="footer">
        <div class="footer-section links">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>

        <div class="footer-section contact">
            <h2>Contact Us</h2>
            <p><i class="fa fa-map-marker"></i> 123 Main Street, City, Country</p>
            <p><i class="fa fa-phone"></i> +91 98477 37654</p>
            <p><i class="fa fa-envelope"></i> info@ysnhub.com</p>
        </div>
        
        <div class="footer-section social-media">
            <h2>Follow Us</h2>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2024 Mobile Accessories Shop | YSN Hub. All rights reserved. | Developed by Muhammed Yasin</p>
    </div>
</footer>


  )
}

export default Footer