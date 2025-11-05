import "../Styles/Home.css";
import About from "./About";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <h1 className="name">Hi 👋, I’m Karthik P</h1>
        <p className="subHeadline">
          I build dynamic, user-friendly, and efficient web applications using
          Java, Spring Boot, React, and MySQL. Passionate about crafting
          seamless digital experiences and writing clean, optimized code.
        </p>
        <div className="btns">
          <button>
            <span>View My Projects</span>{" "}
          </button>
          <button>
            <span>Hire Me</span>
          </button>
        </div>
      </div>
      <div className="robotModal">
        {/* <spline-viewer url="https://prod.spline.design/ECb9SL5Kuj5amdPq/scene.splinecode"></spline-viewer> */}
      </div>

      <div className="otherDetails">
        <p>
          I’m a Computer Science and Engineering graduate from{" "}
          <span className="lightText">
            University College of Engineering, Thirukkuvalai.
          </span>
        </p>
        <p>
          Currently enhancing my expertise in{" "}
          <span className="lightText">Java Full Stack Development </span> while
          exploring <span className="lightText">React</span> and{" "}
          <span className="lightText">modern UI</span> design.
        </p>
      </div>
      <About />
    </div>
  );
};

export default Home;
