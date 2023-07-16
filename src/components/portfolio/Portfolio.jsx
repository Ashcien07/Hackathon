import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio11.png'
import IMG2 from '../../assets/Portfolio12.png'
import IMG3 from '../../assets/Portfolio13.png'
import IMG4 from '../../assets/Portfolio14.png'
import IMG5 from '../../assets/Portfolio15.png'
import IMG6 from '../../assets/Portfolio16.png'
import IMG7 from '../../assets/Portfolio17.png'
import IMG8 from '../../assets/Portfolio18.png'
import IMG9 from '../../assets/Portfolio19.png'
import IMG10 from '../../assets/Portfolio20.png'
import IMG11 from '../../assets/Portfolio21.png'
import IMG12 from '../../assets/Portfolio22.png'
import IMG13 from '../../assets/Portfolio23.png'
import IMG14 from '../../assets/Portfolio24.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Perform Foundational Data, ML, and AI Tasks in Google Cloud',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2210887'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Secure Workloads in Google Kubernetes Engine',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2206997'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Ensure Access & Identity in Google Cloud',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2202317'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Build and Optimize Data Warehouses with BigQuery',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2127043'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Insights from Data with BigQuery',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2030343'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Create and Manage Cloud Resources',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/1991281'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Build a Website on Google Cloud',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2027131'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Deploy to Kubernetes in Google Cloud',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2015693'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Cloud Architecture: Design, Implement, and Manage',
    github: 'https://github.com/Ashcien07',
    demo: 'https://www.cloudskillsboost.google/public_profiles/25c3bf0a-12a2-4f85-b35e-06bac2bdd04e/badges/2024291'
  },
  {
    id: 10,
    image: IMG10,
    title: 'PL-200 Microsoft Power Platform Functional Consultant',
    github: 'https://github.com/Ashcien07',
    demo: 'https://drive.google.com/file/d/1Dbq9H2PZ4HXLmy7_NvlVV16NDpq9kkTW/view?usp=share_link'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Cloud Fundamental Duo Training On AZ-900 and SC-900',
    github: 'https://github.com/Ashcien07',
    demo: 'https://drive.google.com/file/d/1FTgxeK9OqGamVJvKoHksVymavoxN7HWa/view?usp=share_link'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Cloud Foundations',
    github: 'https://github.com/Ashcien07',
    demo: 'https://drive.google.com/file/d/1ei2KSmuofka8J-8o5WadpHSd4wvQnTXO/view?usp=share_link'
  },
  {
    id: 13,
    image: IMG13,
    title: 'PL-400 (Microsoft Power Platform Developer)',
    github: 'https://github.com/Ashcien07',
    demo: 'https://drive.google.com/file/d/19pALjLTpzgCnIt_aOVfzg5psynfedtvr/view?usp=share_link'
  },
  {
    id: 14,
    image: IMG14,
    title: 'Quiz Competition',
    github: 'https://github.com/Ashcien07',
    demo: 'https://drive.google.com/file/d/13sAOb49fZuyrNhG4oPLqJ4Q-aiko3fUz/view?usp=share_link'
  },
  {
    id: 15,
    image: IMG14,
    title: 'International Quiz Competition',
    github: 'https://github.com/Ashcien07',
    demo: 'https://drive.google.com/file/d/13sAOb49fZuyrNhG4oPLqJ4Q-aiko3fUz/view?usp=share_link'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some My Recent Certifications</h5>
      <h2>Certification</h2>

      <div className="container portfolio__container" >
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>GooGle Cloud</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio