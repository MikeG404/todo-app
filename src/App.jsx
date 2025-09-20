import './App.css'
import { useState, useEffect } from 'react'

import Logo from '/images/logo.png'

import ThemeMode from './components/ThemeMode'
import AddTodoInput from './components/AddTodoInput'
import Illustration from './components/Illustration'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

import { todoService } from '../services/todo.service'


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

  const completedTask = async (id) => {
    const current = todos.find(t => t._id === id);
    if (!current) return;
    const nextCompleted = !current.isCompleted;

    // Optimistic update
    setTodos(prev => prev.map(t => t._id === id ? { ...t, isCompleted: nextCompleted } : t));
    console.log('[completedTask] optimistic set', { id, nextCompleted });

    try {
      const updated = await todoService.updateTodo(id, { isCompleted: nextCompleted });
      if (!updated) throw new Error('No response from update');
      console.log('[completedTask] server responded', updated);
    } catch (e) {
      // Rollback on error
      setTodos(prev => prev.map(t => t._id === id ? { ...t, isCompleted: current.isCompleted } : t));
      console.error('[completedTask] rollback due to error:', e);
    }
  }

  const clearCompletedTask = async () => {
    const previous = todos;
    const clearedTodos = todos.filter(i => !i.isCompleted);
    setTodos(clearedTodos);
    try {
      await todoService.deleteCompleted();
    } catch (e) {
      setTodos(previous);
      console.error(e);
    }
  }

  const handleReorder = async (newOrder) => {
    // recalcul des positions en mémoire
    const withPositions = newOrder.map((t, index) => ({ ...t, position: index }));
    const previous = todos;
    setTodos(withPositions);
    try {
      await todoService.updateTodosOrder(withPositions);
    } catch (e) {
      setTodos(previous);
      console.error('[handleReorder] rollback due to error:', e);
    }
  }
  
    useEffect(() => {
      if (isFiltered === 'All') {
        setFilteredList(todos);
        return;
      }
      if (isFiltered === 'Active') {
        setFilteredList(todos.filter(todo => !todo.isCompleted));
        return;
      }
      if (isFiltered === 'Completed') {
        setFilteredList(todos.filter(todo => todo.isCompleted));
        return;
      }
      setFilteredList(todos);
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

