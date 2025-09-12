export default function Checkbox({ id, completedTask }) {
  return (
    <div className="flex items-center">
        <input 
            type='checkbox' 
            id={id}
            className="checkbox-hidden"
            onClick={() => completedTask(id)}
            >
        </input>
        <label htmlFor={id} className="checkbox"></label>
    </div>
  )
}
