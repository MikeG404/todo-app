import Task from '../components/Task'
import TaskDetail from './TaskDetail'


export default function TaskList({data}) {
  return (
    <ul className='flex flex-col gap-4 rounded p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {data.map((task) => {
            return <li><Task key={task.id} id={task.id} task={task.title} /></li>
        })}
        <TaskDetail number={data.length}/>
    </ul>
  )
}
