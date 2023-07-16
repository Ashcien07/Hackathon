import React from 'react'
import { TbBrandLinkedin } from 'react-icons/tb'
import { TbBrandGithub } from 'react-icons/tb'
import { TbBrandMedium } from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/snehashish-patra" target="_blank"><TbBrandLinkedin /></a>
      <a href="https://github.com/Ashcien07" target="_blank"><TbBrandGithub /></a>
      <a href="https://snehashishpatra.medium.com" target="_blank"><TbBrandMedium /></a>
    </div>
  )
}

export default HeaderSocials