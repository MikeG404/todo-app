export default function Checkbox({ id }) {
  return (
    <div className="flex items-center">
        <input 
            type='checkbox' 
            id={id}
            className="checkbox-hidden"
            >
        </input>
        <label htmlFor={id} className="checkbox"></label>
    </div>
  )
}
