export default function Checkbox() {
  return (
    <div className="flex items-center">
        <input 
            type='checkbox' 
            id='checkbox' 
            className="checkbox-hidden"
            >
        </input>
        <label htmlFor="checkbox" className="checkbox"></label>
    </div>
  )
}
