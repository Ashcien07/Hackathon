import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {TfiTwitter} from 'react-icons/tfi'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dcpopb9', 'template_nmuve1j', form.current, 'vA0NbZDwNRCCzF4lv')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">

            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>snehashishpatra8@gmail.com</h5>
            <a href="mailto:snehashishpatra8@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">

            <TfiTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>SnehashishPatr4</h5>
            <a href="https://twitter.com/SnehashishPatr4"  target="_blank">Send a message</a>
          </article>
          <article className="contact__option">

            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917400294105</h5>
            <a href="https://wa.me/+917400294105" target="_blank">Send a message</a>
          </article>
        </div>
        {/* {End of Contact} */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact