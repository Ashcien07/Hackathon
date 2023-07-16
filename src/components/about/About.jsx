import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { IoLibrarySharp } from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About ME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years And Still Learning</small>
            </article>

            <article className='about__card'>
              <TbCertificate className='about__icon' />
              <h5>Certification</h5>
              <small>50+ Certification on Google Cloud</small>
            </article>

            <article className='about__card'>
              <IoLibrarySharp className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <br />
          <p>
            Snehashish here. <br />
            As an ambitious student seeking to gain valuable experience in a professional setting, I am interested in interning with your organization. My desire is to learn from and contribute to your company's goals, while also developing my skills and adaptability. I understand that the knowledge and experience gained over the course of my tenure will be invaluable in preparing me for a successful career. I am eager to apply my talents and enthusiasm to your company and would greatly appreciate the opportunity to learn and grow with your organization.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About