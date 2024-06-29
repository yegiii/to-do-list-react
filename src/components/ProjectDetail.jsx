export default function ProjectDetail({ showProject, handleDeletePro }) {
  // console.log(showProject);
  return (
    <div className=" flex flex-col ">
      <div className="flex justify-between">
        <h2 className="font-bold text-4xl text-gray-900">
          {showProject.title}
        </h2>
        <button
          onClick={() => handleDeletePro(showProject.id)}
          className="text-xl text-gray-900"
        >
          Delete
        </button>
      </div>

      <p className="text-white mt-4">{showProject.dueDate}</p>
      <p className="text-gray-900 text-lg mt-4">{showProject.desc}</p>
      <hr className="mt-4" />
    </div>
  );
}
