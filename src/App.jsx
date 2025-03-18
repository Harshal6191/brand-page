import './App.css'
import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'



function App() {
  
  return (
    <>
     <Navbar/>
     <div className='flex justify-center items-center pt-14 hero'>
     <Hero/>
     </div>
    
    </>
  )
}

export default App
