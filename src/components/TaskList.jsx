import Task from '../components/Task'
import TaskDetail from './TaskDetail'


export default function TaskList({data, deleteTask, completedTask, clearCompletedTask}) {
  return (
    <ul className='flex flex-col gap-4 rounded p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      {data.map((todo) => {
        return <li key={todo.id}><Task id={todo.id} task={todo.title} deleteTask={deleteTask} completedTask={completedTask} isCompleted={todo.isCompleted} /></li>
      })}
        <TaskDetail number={data.length} clearCompletedTask={clearCompletedTask}/>
    </ul>
  )
}
