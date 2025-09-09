import Task from '../components/Task'

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
]

export default function TaskList() {
  return (
    <ul className='flex flex-col gap-8 rounded p-4 bg-white'>
        {data.map((task) => {
            return <li><Task key={task.id} id={task.id} task={task.title} /></li>
        })}
    </ul>
  )
}
