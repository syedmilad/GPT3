import React from 'react'
import "./App.css"
import { Brand, Navbar } from './components'
import Header from './container/Header/Header'

const App = () => {
  return (
    <div className='App'>
       <div className='gradient__bg'>
        <Navbar/>
        <Header/>
       </div>
       <Brand/>
    </div>
  )
}

export default App