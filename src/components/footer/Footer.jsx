import React from 'react'
import './footer.css'
import {FaMedium} from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io5'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Snehashish</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://snehashishpatra.medium.com/"><FaMedium/></a>
        <a href="https://www.linkedin.com/in/snehashish-patra/"><IoLogoLinkedin/></a>
        <a href="https://www.instagram.com/ashcien_06/"><AiFillInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Snehashish. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer