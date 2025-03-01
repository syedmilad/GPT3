import React from 'react'
import "./App.css"
import { Brand, Navbar } from './components'
import { Features, Header, Possibility, WhatGPT3 } from './container'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features/>
      <Possibility/>
    </div>
  )
}

export default App