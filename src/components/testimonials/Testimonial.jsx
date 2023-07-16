import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Piu',
    review: 'I was thoroughly impressed with the level of professionalism and skill displayed in the portfolio website. The designer clearly has a strong grasp on design principles and has executed them flawlessly in the projects showcased.'
  },
  {
    avatar: AVTR2,
    name: 'Dev',
    review: "The portfolio website showcases a diverse range of design styles and techniques, which is a testament to the designer's versatility and adaptability. The use of color, typography and imagery was well balanced and added to the overall aesthetic appeal of the projects. The designer has a keen eye for detail and has delivered a polished final product in every project. I highly recommend this designer for anyone looking for a talented and versatile designer"
  },
  {
    avatar: AVTR3,
    name: 'Akshar',
    review: "The portfolio website showcases a portfolio full of exceptional design work, which demonstrates the designer's ability to understand client needs and deliver innovative and effective solutions. The use of technology, animation, and storytelling in the projects truly sets them apart. I was particularly impressed by the designer's ability to seamlessly blend form and function in their designs. I would highly recommend this designer for any design project."
  },
  {
    avatar: AVTR4,
    name: 'Ankit',
    review: "The portfolio website showcases a collection of outstanding design projects that are not only aesthetically pleasing but also highly functional. The designer has a deep understanding of user experience and has used this knowledge to create designs that are both intuitive and user-friendly. The portfolio demonstrates a strong attention to detail, creativity and a passion for design. I would highly recommend this designer to anyone looking for a talented and dedicated designer who is passionate about delivering exceptional results."
  }

]
const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination ]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial