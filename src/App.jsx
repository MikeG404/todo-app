import './App.css'
import { useState, useEffect } from 'react'

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
  const [isFiltered, setIsFiltered] = useState('All');
  const [filteredList, setFilteredList] = useState([]);

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: inputValue,
      isCompleted: false
    }

    setTodos((prev) => [...prev, newTodo])
    setInputValue('')
  }

  const deleteTask = (id) => {
  const newTodos = todos.filter((i) => i.id !== id);
  setTodos(newTodos);
  }

  const completedTask = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? {...todo, isCompleted: true} : todo 
    );
  
    setTodos(updatedTodo);
  }

  const clearCompletedTask = () => {
    const clearedTodos = todos.filter(i => !i.isCompleted)

    setTodos(clearedTodos);
  }
  
    useEffect(() => {
      let list = todos;
      if (isFiltered === 'Active') {
        list = todos.filter(todo => !todo.isCompleted);
      } else if (isFiltered === 'Completed') {
        list = todos.filter(todo => todo.isCompleted);
      }
      setFilteredList(list);
    }, [todos, isFiltered]);

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
          <AddTodoInput value={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} isThemeMode={isThemeMode}/>
          <TaskList 
            data={filteredList}
            deleteTask={deleteTask}
            completedTask={completedTask}
            clearCompletedTask={clearCompletedTask}
            isThemeMode={isThemeMode}
            />
          <div className='flex flex-col gap-10'>
            <TaskFilter setIsFiltered={setIsFiltered} isThemeMode={isThemeMode}/>
            <p className='text-center'>Drag and drop to reorder list</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
