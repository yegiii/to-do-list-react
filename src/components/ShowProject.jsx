export default function ShowProject({ isProject }) {
  return (
    <div className="w-3/5 flex flex-col justify-center items-center">
      <h2 className="font-bold text-gray-700 text-lg">No Project Selected</h2>
      <p className="text-gray-500 mt-4 text-lg">
        Select a project or get started with new one
      </p>
      <button className="h-10 rounded-lg bg-stone-800 text-gray-400 px-4 mt-6">
        Create new project
      </button>
    </div>
  );
}
