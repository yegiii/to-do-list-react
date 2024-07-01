import { useState } from "react";

export default function AddProject({ onSubmit }) {
  const [project, setProject] = useState({ title: "", desc: "", dueDate: "" });

  function handleInputs(event, type) {
    setProject((prevPro) => {
      return { ...prevPro, [type]: event.target.value };
    });
  }

  return (
    <>
      <div>
        <menu className="flex gap-2 ml-auto">
          <li>
            <button className="text-black">Cancel</button>
          </li>
          <li>
            <button
              type="submit"
              className="rounded bg-black h-8 px-4 text-white "
            >
              Save
            </button>
          </li>
        </menu>
        <div
          onSubmit={(event) => onSubmit(event, project)}
          className="flex flex-col items-center w-full pl-8 pr-16"
        >
          <p>
            <label className="uppercase w-full">title</label>
            <input
              className="block w-full text-gray-800"
              onChange={(event) => handleInputs(event, "title")}
              value={project.title}
              type="text"
            />
          </p>

          <p>
            <label className="uppercase w-full">description</label>
            <textarea
              onChange={(event) => handleInputs(event, "desc")}
              className="block w-full text-gray-800"
              value={project.desc}
            />
          </p>

          <p>
            <label className="uppercase w-full">due date</label>{" "}
            <input
              onChange={(event) => handleInputs(event, "dueDate")}
              value={project.dueDate}
              className="block w-full text-gray-800"
              type="date"
              name="date"
            />
          </p>
        </div>
      </div>
    </>
  );
}
