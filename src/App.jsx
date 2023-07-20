import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";

export const App = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};
