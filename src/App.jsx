import './App.css'
import { useState } from 'react'

import BgMobileLight from '../public/images/bg-mobile-light.jpg'
// import BgMobileDark from '../public/images/bg-mobile-dark.jpg'
import ThemeMode from './components/ThemeMode'

function App() {
  const [isThemeMode, setIsThemeMode] = useState(false);

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  return (
    <main>
      <header className='relative z-10'>
        <div className='absolute w-full flex flex-row justify-between items-center px-6 pt-12'>
          <h1>TODO</h1>
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
