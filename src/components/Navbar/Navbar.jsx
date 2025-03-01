import React from 'react'
import "./Navbar.css";
import {logoSvg} from '../../assets';
const Navbar = () => {
  return (
    <div className='gpt3__navbar' >
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-link_logo' >
            <img src={logoSvg} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container' > 
            <p><a href="#home">Home</a></p>
            <p><a href="#wgt3">What is GPT?</a></p>
            <p><a href="#features">Open AI</a></p>
            <p><a href="#possibility">Case Studies</a></p>
            <p><a href="#footer">Library</a></p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar