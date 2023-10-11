/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

function TaskCard({ task }) {
   const { deleteTask } = useContext(TaskContext);

   return (
      <div className="bg-gray-800 text-white p-2 rounded-lg">
         <h1 className="text-xl font-bold capitalize">
            {task.id} {task.title}
         </h1>
         <i className="text-gray-500 text-sm">{task.description}</i>
         <p>
            <button className="bg-red-500 px-2 py-2 mt-4 rounded-md hover:bg-red-400" onClick={() => deleteTask(task.id)}>
               Delete task
            </button>
         </p>
      </div>
   );
}

export default TaskCard;
