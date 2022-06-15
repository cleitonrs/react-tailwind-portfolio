import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Services from "./components/Services"
import Works from "./components/Works"
import { FaSun, FaMoon } from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <>
      <button
       type="button"
       onClick={handleThemeSwitch}
       className="fixed z-10 right-2 top-2 bg-slate-500 text-lg p-2 rounded-full  " 
      >
        {theme === 'dark' ? <FaMoon className="w-full h-full text-white"></FaMoon>  : <FaSun className="w-full h-full text-white"></FaSun>}
        
      </button>
      <div className='font-inter bg:white dark:bg-slate-900'>
        <div className='max-w-5xl mx-auto w-11/12'>
          <HeroSection />
          <Services />
          <Works />
          <About />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
