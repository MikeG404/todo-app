import './App.css'
import { useState, useEffect } from 'react'

import Logo from '/images/logo.png'

import ThemeMode from './components/ThemeMode'
import AddTodoInput from './components/AddTodoInput'
import Illustration from './components/Illustration'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

import { todoService } from '../services/todo.service.new'


function App() {
  const [isThemeMode, setIsThemeMode] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isFiltered, setIsFiltered] = useState('All');
  const [filteredList, setFilteredList] = useState([]);

  const handleThemeMode = () => {
    setIsThemeMode(!isThemeMode);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const payload = {
      title: inputValue,
      isCompleted: false
    };

    const created = await todoService.addTodo(payload);

    if (created) {
      setTodos((prev) => [...prev, created]);
      setInputValue('');
    }
  }

  const deleteTask = async (_id) => {
  try {
    await todoService.deleteTodo(_id);
    const newTodos = todos.filter((i) => i._id !== _id);
    setTodos(newTodos);
  } catch (e) {
    console.error(e);
  }
  }

  const completedTask = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodo);
  }

  const clearCompletedTask = async () => {
    const completedIds = todos.filter(t => t.isCompleted).map(t => t._id);
    try {
      await Promise.all(completedIds.map(id => todoService.deleteTodo(id)));
      const clearedTodos = todos.filter(i => !i.isCompleted)
      setTodos(clearedTodos);
    } catch (e) {
      console.error(e);
    }
  }

  const handleReorder = (newOrder) => {
    setTodos(newOrder);
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

useEffect(() => {
  const fetchTodos = async () => {
    const data = await todoService.getTodos();
    setTodos(data);
  };
  fetchTodos();
}, []);

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
        <section className='flex flex-col gap-4 px-6 md:px-[114px] xl:px-[450px]'>
          <AddTodoInput value={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} isThemeMode={isThemeMode}/>
          <TaskList 
            data={todos}
            filteredData={filteredList}
            deleteTask={deleteTask}
            completedTask={completedTask}
            clearCompletedTask={clearCompletedTask}
            isThemeMode={isThemeMode}
            onReorder={handleReorder}
          />
          <div className='flex flex-col justify-center items-center gap-10'>
            <TaskFilter setIsFiltered={setIsFiltered} isThemeMode={isThemeMode} currentFilter={isFiltered}/>
            <p>Drag and drop to reorder list</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App

