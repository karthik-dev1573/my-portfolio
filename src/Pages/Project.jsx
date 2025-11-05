import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Constants/data";
import "../Styles/ProjectCard.css";
const Project = () => {
  return (
    <div className="projects">
      <div className="projectTitle">
        <h1>Projects</h1>
      </div>
      <div className="projectContainer">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              index={index}
              title={project.title}
              desc={project.description}
              tech={project.techStack}
              image={project.image}
              github={project.github}
              live={project.liveDemo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
