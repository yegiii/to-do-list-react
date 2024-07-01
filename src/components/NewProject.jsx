import { useState } from "react";
import Input from "./Input";

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
            <button className="">Cancel</button>
          </li>
          <li>
            <button type="submit" className="rounded">
              Save
            </button>
          </li>
        </menu>
        <div className="flex flex-col items-center w-full pl-8 pr-16">
          <Input label="Title" />

          <Input label="Description" textarea />

          <Input label="Due Date" />
        </div>
      </div>
    </>
  );
}
