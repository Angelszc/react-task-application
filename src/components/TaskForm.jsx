/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export function TaskForm() {
   const { createTask } = useContext(TaskContext);

   const emptyTask = {
      id: 0, // No lo utilizo pues asigno su valor al añadir sumando 1 a la longitud del arreglo de tareas
      title: "",
      description: "",
   };

   const [taskForm, setTaskForm] = useState({ emptyTask });

   const handleSubmit = (e) => {
      e.preventDefault();
      createTask(taskForm); // Añade la tarea indicada en el formulario
      setTaskForm(emptyTask); // Después de crear tarea inicializo los input
   };

   return (
      <div className="max-w-md mx-auto">
         <form onSubmit={handleSubmit} className="bg-slate-800 p-5 mb-4">
            <h1 className="text-2xl font-bold text-white mb-3">Create task</h1>
            <input
               autoFocus
               placeholder="Task title"
               value={taskForm.title}
               onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })}
               className="bg-slate-300 p-3 w-full mb-2"
            ></input>
            <textarea
               placeholder="Describe the task"
               value={taskForm.description}
               onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
               className="bg-slate-300 p-3 w-full mb-2"
            ></textarea>
            <button className="bg-green-500 px-2 py-2 mt-4 rounded-md hover:bg-green-400">Add task</button>
         </form>
      </div>
   );
}

export default TaskForm;
