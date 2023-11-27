/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id, !completed);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <div style={{display:"flex", alignItems:"center"}} >
        <li>   
        {task.name}
        <button onClick={handleComplete}>Realizado <MdOutlineTaskAlt/></button>
        <button onClick={handleDelete}>Eliminar <FaRegTrashAlt/></button>
        </li>
        { completed ? <span>✅</span> : null }
    </div>
  );
};

export default TaskItem;
