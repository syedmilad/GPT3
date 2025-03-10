import React from 'react'
import "./Navbar.css";
import { logoSvg } from '../../assets';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT?</a></p>
      <p><a href="#features">Open AI</a></p>
      <p><a href="#possibility">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <div className='gpt3__navbar' >
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-link_logo' >
          <img src={logoSvg} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container' >
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ?
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> :
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center' >
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links_sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar