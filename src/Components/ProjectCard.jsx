const ProjectCard = ({ title, index, desc, image, github, live, tech }) => {
  const openGitHub = () => {
    window.open(github, "_blank");
  };

  const openLiveDemo = () => {
    window.open(live, "_blank");
  };

  return (
    <div key={index} className="projectCard">
      <div className="projectImage">
        <img src={image} alt={`${title}-image`} />
      </div>

      <div className="projectContent">
        <h2>{title}</h2>
        <p>{desc}</p>

        <div className="techStack">
          {tech.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        <div className="projectLinks">
          <button onClick={openGitHub} className="btn githubBtn">
            <span>GitHub</span>
          </button>
          <button onClick={openLiveDemo} className="btn liveBtn">
            <span>Live Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
