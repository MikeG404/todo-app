export default function Checkbox({ id, completedTask, isCompleted }) {
  return (
    <div className="flex items-center">
    <input 
      type='checkbox' 
      id={id}
      className="checkbox-hidden"
      checked={isCompleted}
      onChange={() => completedTask(id)}
    />
        <label htmlFor={id} className="checkbox"></label>
    </div>
  )
}
