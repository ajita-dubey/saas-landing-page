import { useState } from 'react'
import reactLogo from './assets/react.svg'

// import './App.css'
import Header from './section/Header'
import Hero from './section/Hero'
import Features from './section/Features'
import Pricing from './section/Pricing'
import Faq from './section/Faq'
import Testimonials from './section/Testimonials'
import Download from './section/Download'

function App() {
 

  return (
    <main className=' overflow-hidden'>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Download/>
    
    </main>
  )
}

export default App
