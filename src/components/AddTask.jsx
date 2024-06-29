import { useState } from "react";

export default function AddTask({ project, handleAddTasks, handleDeleteTask }) {
  const [task, setTask] = useState("");

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  return (
    <>
      <h2 className="font-bold text-3xl mt-4"> Tasks</h2>
      <div className="mt-6">
        <input type="text" value={task} onChange={handleTaskChange} />
        <button onClick={() => handleAddTasks(task, project.id)}>
          Add Task
        </button>
      </div>
      <ul className="space-y-2 mt-6">
        {project.tasks.length === 0 && (
          <li>This project does not have any tasks yet</li>
        )}
        {project.tasks.length !== 0 &&
          project.tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex items-center bg-slate-500 text-black text-lg h-16 px-4 rounded-lg"
              >
                <p>{task.task}</p>
                <button
                  className="ml-auto"
                  onClick={() => handleDeleteTask(task.id, project.id)}
                >
                  Clear
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
