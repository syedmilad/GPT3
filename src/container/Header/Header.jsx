import React, { useState } from 'react'
import {people,ai} from "../../assets"
import "./Header.css"
const Header = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='gpt3__header section__padding' id='home' >
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something
          amazing with GPT-3
          OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content_input' >
          <input type="text" placeholder='Enter Email Address' />
          <button type='button'>Get Started</button>

          {toggleMenu && (
            <div className='gpt__header-links'>
                  <p><a href="">Home</a></p>
                  <p><a href="">About</a></p>
                  <p><a href="">Contact Us</a></p>
            </div>
          )}
        </div>
        <div className='gpt3__header-content_people' >
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header