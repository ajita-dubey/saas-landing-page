import { useState } from 'react'
import reactLogo from './assets/react.svg'

// import './App.css'
import Header from './section/Header'
import Hero from './section/Hero'
import Features from './section/Features'
import Pricing from './section/Pricing'
import Faq from './section/Faq'

function App() {
 

  return (
    <main className=' overflow-hidden'>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
    
    </main>
  )
}

export default App
