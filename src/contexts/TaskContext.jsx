/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/tasks";

// Constante para acceder al contexto
export const TaskContext = createContext();

// Componente provider del contexto
export function TaskContextProvider(props) {
   const [tasks, setTasks] = useState([]); // Lista de tareas

   useEffect(() => {
      setTasks(data);
   }, []);

   function createTask(taskForm) {
      // ... Operador de propagación (Copia superficial) NO MODIFICA EL ARRAY tasks, sino que HACE UNA COPIA y deja el original sin tocar.
      // Añade la nueva tarea recibida en taskTitle y la añade a la lista actual de tareas "tasks".
      setTasks([
         ...tasks,
         {
            id: tasks.length + 1,
            title: taskForm.title,
            description: taskForm.description,
         },
      ]);
   }

   // Quita del arreglo la tarea eliminada aplicando el método filter, de modo que el array filtra solo los elementos que cumplen la condición dada.
   function deleteTask(taskId) {
      setTasks(tasks.filter((e) => e.id !== taskId));
   }

   return <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>{props.children}</TaskContext.Provider>;
}
