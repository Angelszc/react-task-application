/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskCard from "../components/TaskCard";

function TaskList() {
   const { tasks } = useContext(TaskContext);

   if (tasks.length === 0) {
      return <h1 className="text-3xl text-white text-bold text-center p-3 bg-red-600 rounded-md">There are no tasks added yet</h1>;
   }

   return (
      <div className="grid grid-cols-4 gap-2">
         {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
         ))}
      </div>
   );
}

export default TaskList;
