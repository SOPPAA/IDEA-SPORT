import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'



// import ส่วนหน้าเว็บ 
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/skills'
import Services from './components/Services1/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Number from './components/Number/number'
import Testimonial from './components/Testi/Testi'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* อนิเมชั่นตัวชี้เมาส์ */}
    <AnimatedCursor
      innerSize={11}
      outerSize={8}
      color='2, 73, 13'
      outerAlpha={0.2}
      innerScale={0.5}
      outerStyle={{
        border: '3px solid #3ACD52'
      }}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    {/* สิ้นสุดส่วนของตัวขี้เมาส์ */}


      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Testimonial />
      <Contact/>
      <Footer/>
    
     
    </>
  )
}

export default App