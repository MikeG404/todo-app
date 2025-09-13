export default function TaskFilter({ setIsFiltered, isThemeMode }) {
  return (
    <div className={`w-full preset-2 flex items-center justify-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[83px] py-[17px] rounded ${isThemeMode ? 'bg-white' : 'container'}`}>
        <p onClick={() => setIsFiltered('All')}>All</p>
        <p onClick={() => setIsFiltered('Active')}>Active</p>
        <p onClick={() => setIsFiltered('Completed')}>Completed</p>
    </div>
  )
}
