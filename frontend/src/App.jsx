import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Offer from './Components/Offer'
import Navigations from './Components/Navigations'

function App() {
 

  return (
    <>
    <Offer/>
    <Navbar/>
    <Navigations/>
    <div className="divider"></div>
    </>
  )
}

export default App
