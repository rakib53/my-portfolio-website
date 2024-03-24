import Image from "next/image";
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

async function getData() {
  const res = await fetch(
    "https://my-portfolio-backend-bice.vercel.app/api/get-projects",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return [];
  }
  return await res.json();
}

export default async function Projects() {
  const projects = await getData();

  return (
    <section className="sectionMargin" id="projects">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <p className="sectionDesc">
          Discover my journey of creativity through these{" "}
          <Link href="/add-project">Projects.</Link>
        </p>
        <div></div>
        <div className={styles.projectWrapper}>
          {projects?.map((project, index) => {
            return (
              <div className={styles.projectCard} key={index}>
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
                    src={project?.imageLink || project?.thumbnail}
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
                    {/* {project?.technologies?.map((tech, index) => {
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
                    })} */}
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
