export default function Checkbox({ id, completedTask, isCompleted }) {
  return (
    <div className="flex items-center">
    <input 
      type='checkbox' 
      id={id}
      className="checkbox-hidden"
      checked={isCompleted}
      onChange={() => completedTask(id)}
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    />
        <label htmlFor={id} className="checkbox" onPointerDown={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}></label>
    </div>
  )
}
