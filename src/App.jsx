import './App.css'
import { useState } from 'react'

import Logo from '/public/images/logo.png'

import ThemeMode from './components/ThemeMode'
import AddTodoInput from './components/AddTodoInput'
import Illustration from './components/Illustration'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

const data = [
    {
        id: 1,
        title: 'Complete Online Javascript Course'
    },
    {
        id: 2,
        title: 'Complete Online Javascript Course'
    },
    {
        id: 3,
        title: 'Complete Online Javascript Course'
    },
    {   
        id: 4,
        title: 'Complete Online Javascript Course'
    },
        {   
        id: 5,
        title: 'Complete Online Javascript Course'
    },
    {   
        id: 6,
        title: 'Complete Online Javascript Course'
    },
]

function App() {
  const [isThemeMode, setIsThemeMode] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: data.length + 1,
      title: inputValue
    }
   data.push(newData) 
  }

  return (
    <main className={`min-h-screen relative flex flex-col ${isThemeMode ? 'light-mode' : 'dark-mode'}`}>
      <Illustration isThemeMode={isThemeMode}/>
      <section className='flex flex-col gap-10 z-10'>
        <header>
          <div className='w-full flex flex-row justify-between items-center px-6 pt-12'>
            <img className='w-[108px]' src={Logo} alt="Logo TODO" />
            <ThemeMode onThemeMode={handleThemeMode} isThemeMode={isThemeMode}/>
          </div>
        </header>
        <section className='flex flex-col gap-4 px-6'>
          <AddTodoInput value={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit}/>
          <TaskList data={data}/>
          <div className='flex flex-col gap-10'>
            <TaskFilter />
            <p className='text-center'>Drag and drop to reorder list</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
