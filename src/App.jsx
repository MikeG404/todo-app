import './App.css'
import { useState } from 'react'

import BgMobileLight from '../public/images/bg-mobile-light.jpg'
// import BgMobileDark from '../public/images/bg-mobile-dark.jpg'
import Logo from '../public/images/logo.png'

import ThemeMode from './components/ThemeMode'
import AddTodoInput from './components/AddTodoInput'

function App() {
  const [isThemeMode, setIsThemeMode] = useState(true);

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  return (
    <main className={`h-screen relative flex flex-col ${isThemeMode ? 'light-mode' : 'dark-mode'}`}>
      <picture className='absolute z-10'>
        <img src={BgMobileLight} alt="Background Mobile Light" />
      </picture>
      <section className='h-screen flex flex-col gap-10 z-10'>
        <header>
          <div className='w-full flex flex-row justify-between items-center px-6 pt-12'>
            <img className='w-[108px]' src={Logo} alt="Logo TODO" />
            <ThemeMode onThemeMode={handleThemeMode} isThemeMode={isThemeMode}/>
          </div>
        </header>
        <section className='px-6'>
          <AddTodoInput />
        </section>
      </section>
    </main>
  )
}

export default App
