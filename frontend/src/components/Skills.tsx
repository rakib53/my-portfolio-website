import Container from "./Container";
import CSS from "/skills/css.png";
import EXPRESS from "/skills/express.png";
import FIGMA from "/skills/figma.png";
import FIREBASE from "/skills/firebase.png";
import GIT from "/skills/git.png";
import GITHUB from "/skills/github.png";
import HTML from "/skills/html.png";
import JS from "/skills/js.png";
import MONGODB from "/skills/mongodb.png";
import NEXTJS from "/skills/nextjs.jpg";
import NODE from "/skills/nodejs.png";
import REACT from "/skills/react.png";
import REDUX from "/skills/redux.png";
import SASS from "/skills/sass.png";
import TAILWIND from "/skills/tailwind.png";
import TYPESCRIPT from "/skills/typescript.png";
import VSCODE from "/skills/vscode.png";

const Skills = () => {
  return (
    <section className="section-margin" id="skills">
      <Container>
        <h2 className="section-title">Skills</h2>
        <p className="section-description">
          A snapshot of my expertise and abilities in various areas of interest
          and specialization.
        </p>
        <div className="w-full flex flex-col md:flex-row justify-center gap-[50px]">
          <div className="w-fu md:w-1/2">
            <h3 className="text-text-color mb-5 text-center font-inter font-medium text-lg">
              Mobile & web
            </h3>
            <div className="flex flex-wrap justify-center md:justify-normal gap-5">
              <div className="skill-card">
                <img className="skill-image" src={HTML} alt="HTML" />
                <p className="skill-title">HTML</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={CSS} alt="CSS" />
                <p className="skill-title">CSS</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={JS} alt="JavaScript" />
                <p className="skill-title">JavaScript</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={REACT} alt="Reactjs" />
                <p className="skill-title">React JS</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={NEXTJS} alt="nextjs" />
                <p className="skill-title">Next JS</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={NODE} alt="nodejs" />
                <p className="skill-title">Node JS</p>
              </div>

              <div className="skill-card">
                <img className="skill-image" src={EXPRESS} alt="expressjs" />
                <p className="skill-title">Node JS</p>
              </div>

              <div className="skill-card">
                <img className="skill-image" src={MONGODB} alt="mongodb" />
                <p className="skill-title">MongoDb</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={REDUX} alt="redux" />
                <p className="skill-title">Redux</p>
              </div>

              <div className="skill-card">
                <img
                  className="skill-image"
                  src={TYPESCRIPT}
                  alt="typescript"
                />
                <p className="skill-title">TypeScript</p>
              </div>

              <div className="skill-card">
                <img className="skill-image" src={TAILWIND} alt="tailwind" />
                <p className="skill-title">Tailwind</p>
              </div>

              <div className="skill-card">
                <img className="skill-image" src={SASS} alt="sass(css)" />
                <p className="skill-title">Sass</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-text-color mb-5 text-center font-inter font-medium text-lg">
              Tools
            </h3>
            <div className="w-full flex flex-wrap md:flex-auto justify-center md:justify-normal gap-5">
              <div className="skill-card">
                <img className="skill-image" src={FIGMA} alt="figma" />
                <p className="skill-title">Figma</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={GIT} alt="git" />
                <p className="skill-title">Git</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={FIREBASE} alt="firebase" />
                <p className="skill-title">Firebase</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={VSCODE} alt="vscode" />
                <p className="skill-title">VS Code</p>
              </div>
              <div className="skill-card">
                <img className="skill-image" src={GITHUB} alt="github" />
                <p className="skill-title">Github</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
