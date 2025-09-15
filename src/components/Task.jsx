import Checkbox from "./Checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

export default function Task({ id, task, deleteTask, completedTask, isCompleted }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id});

    const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // On ajoute un style pour l'élément en cours de déplacement
    opacity: isDragging ? 0.7 : 1,
    boxShadow: isDragging ? '0px 5px 15px rgba(0,0,0,0.2)' : 'none',
    cursor: 'grab',
    // transform-style: preserve-3d; aide à éviter le flou sur le texte pendant la transformation
    transformStyle: 'preserve-3d', 
  };

  return (
  <div 
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    className='flex items-center gap-4 border-b-2 border-b-gray-100 pb-4'>
    <Checkbox id={id} completedTask={completedTask} isCompleted={isCompleted}/>
        <p className='preset-3 flex-1'>{task}</p>
        <img 
          src="./images/icon-cross.svg" 
          alt="Cross Icon" 
          className="w-2.5 h-2.5 cursor-pointer"
          onClick={() => deleteTask(id)}
          />
    </div>
  )
}
