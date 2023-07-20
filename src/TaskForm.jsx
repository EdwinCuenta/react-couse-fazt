import { useState, useContext } from "react";
import { TaskContext } from "./context/TaskContext";
const TaskForm = () => {
  const [tittle, setTittle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      tittle,
      descripcion,
    });

    setTittle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-2">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTittle(e.target.value);
          }}
          value={tittle}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={descripcion}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
