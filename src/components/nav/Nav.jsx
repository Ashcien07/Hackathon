import React from 'react'
import './nav.css'
import {SiHomeadvisor} from 'react-icons/si'
import {BiUserPin} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
// import {BiMessageSquareDetail} from 'react-icons/bi'
import {TbFileCertificate} from 'react-icons/tb'
import {GoMailRead} from 'react-icons/go'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiHomeadvisor/></a>
      <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserPin/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><TbFileCertificate/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GoMailRead/></a>
    </nav>
  )
}

export default Nav