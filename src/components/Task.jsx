import React from 'react'

export default function Task() {
  return (
    <div className='flex items-center gap-4'>
        <input type="checkbox" name="task" id="task" />
        <label htmlFor="task">Complete online Javascript course</label>
    </div>
  )
}
