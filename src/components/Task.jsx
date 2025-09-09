import Checkbox from "./Checkbox";

export default function Task({ id, task }) {
  return (
    <div className='flex items-center gap-4 border-b-2 border-b-gray-100 pb-4'>
        <Checkbox id={id}/>
        <p className='preset-3 flex-1'>{task}</p>
        <img src="./images/icon-cross.svg" alt="" />
    </div>
  )
}
