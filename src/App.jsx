import './App.css'
import { useState } from 'react'

import Logo from '/public/images/logo.png'

import ThemeMode from './components/ThemeMode'
import AddTodoInput from './components/AddTodoInput'
import Illustration from './components/Illustration'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

function App() {
  const [isThemeMode, setIsThemeMode] = useState(true);

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  return (
    <main className={`h-screen relative flex flex-col ${isThemeMode ? 'light-mode' : 'dark-mode'}`}>
      <Illustration isThemeMode={isThemeMode}/>
      <section className='flex flex-col gap-10 z-10'>
        <header>
          <div className='w-full flex flex-row justify-between items-center px-6 pt-12'>
            <img className='w-[108px]' src={Logo} alt="Logo TODO" />
            <ThemeMode onThemeMode={handleThemeMode} isThemeMode={isThemeMode}/>
          </div>
        </header>
        <section className='flex flex-col gap-4 px-6'>
          <AddTodoInput />
          <TaskList />
          <TaskFilter />
        </section>
      </section>
    </main>
  )
}

export default App
