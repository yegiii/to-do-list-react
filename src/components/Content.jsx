import { useState } from "react";
import ProjectsSidebar from "./ProjectsSidebar";
import ShowProject from "./ShowProject";
import AddProject from "./AddProject";
import ProjectDetail from "./ProjectDetail";
import AddTask from "./AddTask";

export default function Content() {
  const [hasProject, setHasProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showDetails, setShowDetails] = useState();

  function handleFormSubmit(event, project) {
    event.preventDefault();

    setProjects((prevPros) => {
      let updatedPros = prevPros.map((pro) => ({ ...pro }));
      let id = prevPros.length == 0 ? 0 : prevPros[0].id + 1;
      let newProject = { tasks: [], id: id, ...project };
      updatedPros.unshift(newProject);
      return updatedPros;
    });
  }

  function handleShowProject(projectId) {
    setShowDetails(true);
    setSelectedProjectId(projectId);
  }
  //   console.log("selecetd");
  //   console.log(selectedProject);
  function handleNewProject() {
    setHasProject(true);
  }

  function handleDeletePro(id) {
    setProjects((prevPros) => {
      const updatedPros = prevPros.map((pro) => ({ ...pro }));
      setShowDetails(false);
      return updatedPros.filter((item) => item.id !== id);
    });
  }

  function handleAddTasks(task, projectId) {
    console.log(task);
    setProjects((prevPros) => {
      const updatedPros = prevPros.map((pro) => ({ ...pro }));
      const selectedProject = prevPros.find((item) => item.id == projectId);
      let id =
        selectedProject.tasks.length == 0 ? 0 : selectedProject.tasks[0].id + 1;
      const newTask = { id: id, task: task };
      selectedProject.tasks.unshift(newTask);
      updatedPros.map((pros) => {
        if (pros.id == id) {
          pros.tasks = selectedProject.tasks;
        }
      });
      return updatedPros;
    });
  }

  function handleDeleteTask(taskId, projectId) {
    console.log(
      "Deleting task with ID:",
      taskId,
      "from project with ID:",
      projectId
    );
    setProjects((prevPros) => {
      const updatedPros = prevPros.map((project) => {
        if (project.id === projectId) {
          const updatedTasks = project.tasks.filter(
            (task) => task.id !== taskId
          );
          console.log("Updated tasks for project:", projectId, updatedTasks);
          return { ...project, tasks: updatedTasks };
        }
        return project;
      });
      console.log("Updated projects:", updatedPros);
      return updatedPros;
    });
  }

  //   useEffect(() => {
  //     if (selectedProject) {
  //       const updatedProject = projects.find(
  //         (item) => item.id === selectedProject.id
  //       );
  //       console.log("Updating selected project:", updatedProject);
  //       setSelectedProject(updatedProject);
  //     }
  //   }, [projects, selectedProject]);

  //   function handleDeleteTask(taskId, projectId) {
  //     setProjects((prevPros) => {
  //       // Create a deep copy of projects array
  //       const updatedPros = prevPros.map((pro) => ({ ...pro }));

  //       // Find the project to update
  //       const projectToUpdate = updatedPros.find((item) => item.id === projectId);
  //       if (projectToUpdate) {
  //         // Create a new tasks array excluding the deleted task
  //         const updatedTasks = projectToUpdate.tasks.filter(
  //           (task) => task.id !== taskId
  //         );

  //         // Update the project's tasks array immutably
  //         projectToUpdate.tasks = updatedTasks;

  //         // Return a new array of projects with the updated project
  //         return updatedPros;
  //       }
  //       // Return the original projects if no update was made
  //       return prevPros;
  //     });
  //Conclusion
  //Ensure that every time you update state in React, especially nested state like arrays within objects,
  //you are creating new objects and arrays to trigger re-renders properly. This approach will help you maintain
  //a consistent and predictable UI state in your React application.
  //   }

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onClick={handleNewProject}
        projects={projects}
        handleShowProject={handleShowProject}
      />
      {/* <ShowProject isProject={hasProject} /> */}
      {showDetails && selectedProject && (
        <div className="w-full flex flex-col mt-24 pl-8 pr-36">
          <ProjectDetail
            showProject={selectedProject}
            handleDeletePro={handleDeletePro}
          />
          <AddTask
            handleAddTasks={handleAddTasks}
            project={selectedProject}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
      )}
      {!showDetails && <AddProject onSubmit={handleFormSubmit} />}
    </main>
  );
}
