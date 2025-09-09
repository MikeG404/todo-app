import React from 'react'
import Checkbox from './Checkbox'

export default function AddTodoInput() {
  return (
    <div className='px-6 py-3.5 rounded bg-white placeholder:preset-3'>
        <div className='flex items-center gap-4'>
          <Checkbox />
          <input className='outline-none' type="text" placeholder='Create a new todo...' />
        </div>
    </div>
  )
}
