import Image from "next/image";
import CSS from "../../public/skills/css.png";
import EXPRESS from "../../public/skills/express.png";
import FIGMA from "../../public/skills/figma.png";
import FIREBASE from "../../public/skills/firebase.png";
import GIT from "../../public/skills/git.png";
import GITHUB from "../../public/skills/github.png";
import HTML from "../../public/skills/html.png";
import JS from "../../public/skills/js.png";
import MONGODB from "../../public/skills/mongodb.png";
import NEXTJS from "../../public/skills/nextjs.jpg";
import NODE from "../../public/skills/nodejs.png";
import REACT from "../../public/skills/react.png";
import REDUX from "../../public/skills/redux.png";
import SASS from "../../public/skills/sass.png";
import TAILWIND from "../../public/skills/tailwind.png";
import TYPESCRIPT from "../../public/skills/typescript.png";
import VSCODE from "../../public/skills/vscode.png";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <section className="sectionMargin" id="skills">
      <div className="container">
        <h2 className="sectionTitle">Skills</h2>
        <p className="sectionDesc">
          A snapshot of my expertise and abilities in various areas of interest
          and specialization.
        </p>
        <div className={styles.parentSkillsWrapper}>
          <div className={styles.skillWrapper}>
            <h3 className={styles.title}>Mobile & web</h3>
            <div className={styles.skillCardWrapper}>
              <div className={styles.SkillsCard}>
                <Image className={styles.skillsImage} src={HTML} alt="HTML" />
                <p className={styles.skillTitle}>HTML</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image className={styles.skillsImage} src={CSS} alt="CSS" />
                <p className={styles.skillTitle}>CSS</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={JS}
                  alt="JavaScript"
                />
                <p className={styles.skillTitle}>JavaScript</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={REACT}
                  alt="Reactjs"
                />
                <p className={styles.skillTitle}>React JS</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={NEXTJS}
                  alt="nextjs"
                />
                <p className={styles.skillTitle}>Next JS</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image className={styles.skillsImage} src={NODE} alt="nodejs" />
                <p className={styles.skillTitle}>Node JS</p>
              </div>

              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={EXPRESS}
                  alt="expressjs"
                />
                <p className={styles.skillTitle}>Node JS</p>
              </div>

              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={MONGODB}
                  alt="mongodb"
                />
                <p className={styles.skillTitle}>MongoDb</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image className={styles.skillsImage} src={REDUX} alt="redux" />
                <p className={styles.skillTitle}>Redux</p>
              </div>

              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={TYPESCRIPT}
                  alt="typescript"
                />
                <p className={styles.skillTitle}>TypeScript</p>
              </div>

              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={TAILWIND}
                  alt="tailwind"
                />
                <p className={styles.skillTitle}>Tailwind</p>
              </div>

              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={SASS}
                  alt="sass(css)"
                />
                <p className={styles.skillTitle}>Sass</p>
              </div>
            </div>
          </div>
          <div className={styles.toolsWrapper}>
            <h3 className={styles.title}>Tools</h3>
            <div className={styles.toolsCardWrapper}>
              <div className={styles.SkillsCard}>
                <Image className={styles.skillsImage} src={FIGMA} alt="figma" />
                <p className={styles.skillTitle}>Figma</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image className={styles.skillsImage} src={GIT} alt="git" />
                <p className={styles.skillTitle}>Git</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={FIREBASE}
                  alt="firebase"
                />
                <p className={styles.skillTitle}>Firebase</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={VSCODE}
                  alt="vscode"
                />
                <p className={styles.skillTitle}>VS Code</p>
              </div>
              <div className={styles.SkillsCard}>
                <Image
                  className={styles.skillsImage}
                  src={GITHUB}
                  alt="github"
                />
                <p className={styles.skillTitle}>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
