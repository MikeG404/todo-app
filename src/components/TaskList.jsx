import Task from '../components/Task'
import TaskDetail from './TaskDetail'

const data = [
    {
        id: 1,
        title: 'Complete Online Javascript Course'
    },
    {
        id: 2,
        title: 'Complete Online Javascript Course'
    },
    {
        id: 3,
        title: 'Complete Online Javascript Course'
    },
    {   
        id: 4,
        title: 'Complete Online Javascript Course'
    },
        {   
        id: 5,
        title: 'Complete Online Javascript Course'
    },
    {   
        id: 6,
        title: 'Complete Online Javascript Course'
    },
]

export default function TaskList() {
  return (
    <ul className='flex flex-col gap-4 rounded p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {data.map((task) => {
            return <li><Task key={task.id} id={task.id} task={task.title} /></li>
        })}
        <TaskDetail number={data.length}/>
    </ul>
  )
}
