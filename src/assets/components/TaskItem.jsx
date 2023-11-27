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
    <div>
        <li>
        {task.name}
        <button onClick={handleComplete}>Realizado <MdOutlineTaskAlt/></button>
        <button onClick={handleDelete}>Eliminar <FaRegTrashAlt/></button>
        { completed ? <span>✅</span> : null }
        </li>
    </div>
  );
};

export default TaskItem;
