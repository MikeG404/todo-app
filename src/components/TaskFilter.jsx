export default function TaskFilter({ setIsFiltered, isThemeMode, currentFilter }) {
  return (
    <div className={`w-full preset-2 flex items-center justify-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[83px] py-[17px] rounded ${isThemeMode ? 'bg-white' : 'container'}`}>
        <p 
          onClick={() => setIsFiltered('All')}
          className={`filter-item ${isThemeMode ? 'light' : 'dark'} ${currentFilter === 'All' ? 'active' : ''}`}
        >
          All
        </p>
        <p 
          onClick={() => setIsFiltered('Active')}
          className={`filter-item ${isThemeMode ? 'light' : 'dark'} ${currentFilter === 'Active' ? 'active' : ''}`}
        >
          Active
        </p>
        <p 
          onClick={() => setIsFiltered('Completed')}
          className={`filter-item ${isThemeMode ? 'light' : 'dark'} ${currentFilter === 'Completed' ? 'active' : ''}`}
        >
          Completed
        </p>
    </div>
  )
}