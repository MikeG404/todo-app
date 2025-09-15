export default function TaskDetail({number, clearCompletedTask, isThemeMode}) {
  return (
    <div className="task-footer">
        <p>{number} items left</p>
        <button onClick={clearCompletedTask}>Clear completed</button>
    </div>
  )
}