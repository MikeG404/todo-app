import Checkbox from "./Checkbox";

export default function Task() {
  return (
    <div className='flex items-center gap-4'>
        <Checkbox />
        <p className='preset-3 flex-1'>Complete online Javascript course</p>
        <img src="./images/icon-cross.svg" alt="" />
    </div>
  )
}
