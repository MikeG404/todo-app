export default function TaskDetail({number, clearCompletedTask}) {
  return (
    <div className='preset-3 flex justify-between'>
        <p>{number} items left</p>
        <button onClick={clearCompletedTask}>Clear completed</button>
    </div>
  )
}