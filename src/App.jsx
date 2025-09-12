import './App.css'
import { useState } from 'react'

import Logo from '/images/logo.png'

import ThemeMode from './components/ThemeMode'
import AddTodoInput from './components/AddTodoInput'
import Illustration from './components/Illustration'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'


function App() {
  const [isThemeMode, setIsThemeMode] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: inputValue
    }

    setTodos((prev) => [...prev, newTodo])
    setInputValue('')
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
          <TaskList data={todos}/>
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
