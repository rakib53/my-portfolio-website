import Image from "next/image";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import styles from "../styles/Projects.module.css";
// technology Images
import Link from "next/link";
import MONGODB from "../../public/skills/mongodb.png";
import REACT from "../../public/skills/react.png";
import REDUX from "../../public/skills/redux.png";
import EXPRESSJS from "/public/skills/express.png";
import NEXTJS from "/public/skills/nextjs.png";
import NODE from "/public/skills/node-js.webp";

export default function Projects() {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    fetch("./data/projects.json")
      .then((response) => response.json())
      .then((jsonData) => setprojects(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="sectionMargin" id="projects">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <p className="sectionDesc">
          Discover My Journey of Creativity Through These Projects.
        </p>
        <div className={styles.projectWrapper}>
          {projects?.map((project) => {
            return (
              <div className={styles.projectCard} key={project?.id}>
                {project?.githubLink && (
                  <div className={styles.githubIconWrapper}>
                    <Link
                      href={project?.githubLink}
                      target=" "
                      className={styles.githubLink}
                    >
                      <BsGithub className={styles.github} />
                    </Link>
                  </div>
                )}

                <Link
                  href={project?.liveSiteLink}
                  target=" "
                  className={styles.projectHeader}
                >
                  <Image
                    width={500}
                    height={500}
                    src={project?.coverPhoto}
                    className={styles.projectImage}
                    alt="projects"
                  />
                </Link>

                <div className={styles.projectBody}>
                  <Link
                    href={project?.liveSiteLink}
                    target=" "
                    className={styles.projectHeader}
                  >
                    <h3 className={styles.projectTitle}>{project?.title}</h3>
                  </Link>
                  <p className={styles.projectDesc}>{project?.description}</p>
                </div>

                <div className={styles.projectFooter}>
                  <p>Technologies:</p>
                  <div className={styles.technologyIconWrapper}>
                    {project?.technologies?.map((tech) => {
                      if (tech === "reactjs") {
                        return (
                          <Image
                            className={styles.technologyImage}
                            src={REACT}
                            alt="technology"
                          />
                        );
                      } else if (tech === "nextjs") {
                        return (
                          <Image
                            className={styles.technologyImage}
                            src={NEXTJS}
                            alt="technology"
                          />
                        );
                      } else if (tech === "mongodb") {
                        return (
                          <Image
                            className={styles.technologyImage}
                            src={MONGODB}
                            alt="technology"
                          />
                        );
                      } else if (tech === "nodejs") {
                        return (
                          <Image
                            className={styles.technologyImage}
                            src={NODE}
                            alt="technology"
                          />
                        );
                      } else if (tech === "redux") {
                        return (
                          <Image
                            className={styles.technologyImage}
                            src={REDUX}
                            alt="technology"
                          />
                        );
                      } else if (tech === "expressjs") {
                        return (
                          <Image
                            className={styles.technologyImage}
                            src={EXPRESSJS}
                            alt="technology"
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
