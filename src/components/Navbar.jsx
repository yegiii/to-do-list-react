export default function Navbar({ onClick, projects, handleShowProject }) {
  //   console.log(projects);

  return (
    <div className="rounded-tr-xl w-2/6 bg-slate-900 mt-8 h-screen px-10 pt-16">
      <h2 className="uppercase text-white font-bold text-lg">your projects</h2>
      <button
        onClick={onClick}
        className="rounded-lg bg-gray-600 text-gray-400 px-4 h-9 mt-8"
      >
        + Add Project
      </button>

      <ul className="mt-8 flex flex-col gap-2">
        {projects.map((project) => {
          return (
            <li
              className="truncate text-lg rounded text-white bg-slate-700 hover:bg-stone-800 p-3"
              onClick={() => handleShowProject(project.id)}
              key={project.id}
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
