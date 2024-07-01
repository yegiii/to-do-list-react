import Button from "./Button";

export default function Navbar({ onClick, projects, handleShowProject }) {
  //   console.log(projects);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
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
    </aside>
  );
}
