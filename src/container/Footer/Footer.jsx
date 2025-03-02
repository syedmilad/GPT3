import React from 'react'
import "./Footer.css"
import { logoSvg } from '../../assets'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-content'>
        <div className='gpt3__footer-content_main'>
          <div className='gpt3__footer-contentA'>
            <img src={logoSvg} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='gpt3__footer-contentB'>
            <div>
              <p>Links</p>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>
            <div>
              <p>Company</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
            <div>
              <p>Get in touch</p>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>
        </div>
        <div className='gpt3__footer-content_sub'>
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer