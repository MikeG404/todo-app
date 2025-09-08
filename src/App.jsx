import './App.css'
import { useState } from 'react'

import BgMobileLight from '../public/images/bg-mobile-light.jpg'
// import BgMobileDark from '../public/images/bg-mobile-dark.jpg'
import Logo from '../public/images/logo.png'

import ThemeMode from './components/ThemeMode'

function App() {
  const [isThemeMode, setIsThemeMode] = useState(false);

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  return (
    <main className={`h-screen flex flex-col gap-10 ${isThemeMode ? 'light-mode' : 'dark-mode'}`}>
      <header className='relative z-10'>
        <div className='absolute w-full flex flex-row justify-between items-center px-6 pt-12'>
          <img className='w-[108px]' src={Logo} alt="Logo TODO" />
          <ThemeMode onThemeMode={handleThemeMode} isThemeMode={isThemeMode}/>
        </div>
        <picture className='absolute -z-10'>
          <img src={BgMobileLight} alt="Background Mobile Light" />
        </picture>
      </header>
    </main>
  )
}

export default App
