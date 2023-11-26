import React, { useState, useEffect } from 'react';
import TaskList from './assets/components/TaskList';
import TaskForm from './assets/components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  }, [tasks]);

  const handleTaskComplete = (taskId, completed) => {
    // Actualiza el estado para marcar una tarea que se encuentre completada
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    // Actualiza el estado para eliminar una tarea
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleTaskAdd = (taskName) => {
    // Agrega nueva tarea al estado principal 
    const newTask = { id: tasks.length + 1, name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
      <div>
        
        <h1>Bienvenido a nuestra...</h1>
          <h2><marquee behavior="Alternate" direction="left">¡Lista de Tareas!</marquee></h2>
          <div className="container">
            <div className="button-container">
              <TaskForm onTaskAdd={handleTaskAdd} />
                <TaskList
                  tasks={tasks}
                  onTaskComplete={handleTaskComplete}
                  onTaskDelete={handleTaskDelete}
              />
            </div>
          </div>   
      </div>
  );
};

export default App;
