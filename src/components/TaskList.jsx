import Task from '../components/Task'
import TaskDetail from './TaskDetail'

import { DndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'

export default function TaskList({data, deleteTask, completedTask, clearCompletedTask, isThemeMode, onReorder}) {
  
    const handleDragEnd = (e) => {
      const { active, over } = e;
      if (!over || active.id === over.id) return;
  
      const oldIndex = data.findIndex(item => item._id === active.id);
      const newIndex = data.findIndex(item => item._id === over.id);
  
      if (oldIndex !== -1 && newIndex !== -1) {
        const updated = [...data];
        const [moved] = updated.splice(oldIndex, 1);
        updated.splice(newIndex, 0, moved);
        if (onReorder) onReorder(updated);
      }
    }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={data.map(todo => todo._id)}>
        <ul id='sortable-list' className={`flex flex-col gap-4 rounded p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${isThemeMode ? 'bg-white' : 'container'}`}>
          {data.map((todo) => (
            <li key={todo._id}><Task id={todo._id} task={todo.title} deleteTask={deleteTask} completedTask={completedTask} isCompleted={todo.isCompleted} isThemeMode={isThemeMode} /></li>
          ))}
          <TaskDetail number={data.length} clearCompletedTask={clearCompletedTask}/>
        </ul>
      </SortableContext>
    </DndContext>
  )
}
