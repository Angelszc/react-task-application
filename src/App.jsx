import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
   return (
      <main className="bg-zinc-900 h-screen">
         <h1>Task list</h1>
         <div className="container mx-auto p-10">
            <TaskForm />
            <TaskList />
         </div>
      </main>
   );
}

export default App;
