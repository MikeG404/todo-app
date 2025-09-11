import React from 'react'
import Checkbox from './Checkbox'

export default function AddTodoInput({value, setInputValue}) {

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(e.target.value);
  }

  const handleSubmit = () => {
    
  }

  return (
    <form onSubmit={handleSubmit} className='px-6 py-3.5 rounded bg-white placeholder:preset-3'>
        <div className='flex items-center gap-4'>
          <Checkbox />
          <input value={value} onChange={handleChange} className='outline-none' type="text" placeholder='Create a new todo...' />
        </div>
    </form>
  )
}
