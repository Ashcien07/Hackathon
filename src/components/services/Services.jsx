import React from 'react'
import './services.css'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Transform ideas into intuitive and visually stunning designs.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Elevate the user experience with creativity and technical expertise.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Design for both form and function in every project.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Breathe life into digital products with a keen eye for detail.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Craft engaging user interfaces that captivate and convert.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Creating digital masterpieces that are both beautiful and intuitive.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Elevate your website's appearance with stunning design and seamless functionality.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Turn your ideas into reality with frontend development that's both beautiful and efficient.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Transform the user experience with intuitive and engaging frontend development.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Making your website stand out with cutting-edge frontend technologies.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Elevating your brand with custom frontend solutions.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Unleashing the full potential of your website with innovative frontend development.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Bringing your ideas to life with sleek, intuitive design.</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Blogging/Content Writing</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Unleash your creativity with my words. Enthrall Dull Topics.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>I write to captivate, not just to communicate.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Transforming your ideas into engaging narratives.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Words that stand out and make an impact.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Your content, my creativity. Let's make magic happen.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Conveying your message with clarity and style.</p>
            </li>
          </ul>
        </article>
        {/* Blogging/Content Writing */}
      </div>
    </section>
  )
}

export default Services