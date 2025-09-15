import Checkbox from "./Checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

export default function Task({ id, task, deleteTask, completedTask, isCompleted, isThemeMode }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.7 : 1,
    boxShadow: isDragging ? '0px 5px 15px rgba(0,0,0,0.2)' : 'none',
    cursor: 'grab',
    transformStyle: 'preserve-3d', 
  };

  return (
    <div 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`task-item ${isThemeMode ? 'light' : 'dark'}`}>
      <Checkbox id={id} completedTask={completedTask} isCompleted={isCompleted}/>
      <p className={`task-text ${isThemeMode ? 'light' : 'dark'} ${isCompleted ? 'completed' : ''}`}>
        {task}
      </p>
      <img 
        src="./images/icon-cross.svg" 
        alt="Cross Icon" 
        className="task-delete"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(id);
        }}
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      />
    </div>
  )
}