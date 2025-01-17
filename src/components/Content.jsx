import { useState } from "react";
import ProjectsSidebar from "./ProjectsSidebar";
import NoProjectSelected from "./NoProjectSelected";
import NewProject from "./NewProject";
import SelectedProject from "./SelectedProject";

export default function Content() {
  const [projectsState, setProjectsState] = useState({
    //currentAction : 'adding'  =>'adding' , 'selected-project' , 'nothing-selected'
    // for controlling what's been displayed
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Means we dont have any project and we want to add one
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  // We want to add a new project
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        // you want to change the screen and back to <NoProjectSelected/>
        selectedProjectId: undefined,
        // you want to go to the details of created project
        // selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handelCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handeleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  //   function handleDeleteTask(taskId, projectId) {
  //     setProjects((prevPros) => {
  // Create a deep copy of projects array
  //       const updatedPros = prevPros.map((pro) => ({ ...pro }));

  // Find the project to update
  //       const projectToUpdate = updatedPros.find((item) => item.id === projectId);
  //       if (projectToUpdate) {
  // Create a new tasks array excluding the deleted task
  //         const updatedTasks = projectToUpdate.tasks.filter(
  //           (task) => task.id !== taskId
  //         );

  // Update the project's tasks array immutably
  //         projectToUpdate.tasks = updatedTasks;

  // Return a new array of projects with the updated project
  //         return updatedPros;
  //       }
  // Return the original projects if no update was made
  //       return prevPros;
  //     });
  //Conclusion
  //Ensure that every time you update state in React, especially nested state like arrays within objects,
  //you are creating new objects and arrays to trigger re-renders properly. This approach will help you maintain
  //a consistent and predictable UI state in your React application.
  //   }

  // const selectedProject = projects.find(
  //   (project) => project.id === selectedProjectId
  // );

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  console.log(selectedProjectTasks);
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handeleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );
  // === null wich means we want to add a new project
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handelCancelAddProject} />
    );

    // === undefined wich means we dont have any project
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}
