import React from 'react'

export default function AddTodoInput() {
  return (
    <div className='p-6 rounded bg-white preset-3  '>
        {/* <label htmlFor="checkbox"></label> */}
        <div className='flex items-center gap-4'>
          <input type="checkbox" name='checkbox' />
          <input className='outline-none' type="text" placeholder='Create a new todo...' />
        </div>
    </div>
  )
}
