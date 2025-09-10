import React from 'react'

export default function TaskDetail({number}) {
  return (
    <div className='preset-3 flex justify-between'>
        <p>{number} items left</p>
        <button>Clear completed</button>
    </div>
  )
}