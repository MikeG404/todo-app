import React from 'react'
import Checkbox from './Checkbox'

export default function AddTodoInput({value, setInputValue, handleSubmit, isThemeMode}) {

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(e.target.value);
  }



  return (
    <form onSubmit={handleSubmit} className={`px-6 py-3.5 rounded bg-white placeholder:preset-3 ${isThemeMode ? 'bg-white' : 'container'}`}>
        <div className='flex items-center gap-4'>
          <Checkbox />
          <input value={value} onChange={handleChange} className='outline-none' type="text" placeholder='Create a new todo...' />
        </div>
    </form>
  )
}
