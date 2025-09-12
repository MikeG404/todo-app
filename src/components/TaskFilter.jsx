export default function TaskFilter({ setIsFiltered}) {
  return (
    <div className='preset-2 flex gap-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[83px] py-[17px] rounded'>
        <p onClick={() => setIsFiltered('All')}>All</p>
        <p onClick={() => setIsFiltered('Active')}>Active</p>
        <p onClick={() => setIsFiltered('Completed')}>Completed</p>
    </div>
  )
}
