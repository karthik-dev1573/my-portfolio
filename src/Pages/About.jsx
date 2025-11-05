import "../Styles/About.css";

const About = () => {
  const techStacks = [
    {
      name: "HTML",
      src: "/images/HTML.png",
    },
    {
      name: "CSS",
      src: "/images/css.png",
    },
    {
      name: "JavaScript",
      src: "/images/JS.png",
    },
    {
      name: "React",
      src: "/images/react.png",
    },
    {
      name: "Java",
      src: "/images/Java.png",
    },
    {
      name: "Spring",
      src: "/images/Spring.png",
    },
    {
      name: "SpringBoot",
      src: "/images/Springboot.png",
    },
    {
      name: "MySql",
      src: "/images/MySql.png",
    },
  ];
  return (
    <div className="aboutContainer ">
      <div className="aboutContent">
        <div className="details">
          <h1>About Me</h1>
          <p>
            <span> I’m Karthik P</span>, a tech enthusiast from Chennai, Tamil
            Nadu, with a strong passion for software development. My journey in
            programming started during my engineering days, and I’ve since
            developed a keen interest in backend systems, frontend design, and
            full-stack solutions. I love turning ideas into interactive and
            functional web experiences that make a difference.
          </p>
        </div>
        <div className="aboutImage">
          <img src="/AboutImage.png" alt="about-image" />
        </div>
      </div>
      <div className="TechStacks">
        <h1>Tech Stacks</h1>

        <div className="techContainer">
          {techStacks.map((techStack, index) => {
            return (
              <div className="tech" key={index}>
                <img src={techStack.src} alt={techStack.name} />
                <h3>{techStack.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
