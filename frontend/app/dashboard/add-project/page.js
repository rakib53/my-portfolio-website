"use client";

import { useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import ImageUpload from "../../components/UploadImage";
import styles from "../../styles/AddProject.module.css";
// technologies
const technologies = ["reactjs", "nextjs", "nodejs", "expressjs", "mongodb"];

export default function page() {
  const [project, setProjects] = useState({
    title: "",
    githubLink: "",
    liveSiteLink: "",
    description: "",
    imageLink: "",
    thumbnail: "",
    technologies: ["reactjs", "nodejs", "expressjs", "mongodb"],
  });

  const handleCreateProject = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/create-project", {
        title: project?.title,
        description: project?.description,
        liveSiteLink: project?.liveSiteLink,
        githubLink: project?.githubLink,
        thumbnail: project?.imageLink || project?.thumbnail,
        technologies: ["reactjs", "nodejs", "expressjs", "mongodb"],
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.addProjectFormWrapper}>
        <h1 className={styles.addProjectText}>Add project</h1>
        <form action="" className={styles.addProjectForm}>
          <div>
            <input
              type="text"
              placeholder="Title"
              className={styles.addProjectField}
              value={project?.title}
              onChange={(e) => {
                setProjects({ ...project, title: e.target.value });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Github link"
              className={styles.addProjectField}
              value={project?.githubLink}
              onChange={(e) => {
                setProjects({ ...project, githubLink: e.target.value });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Live link"
              className={styles.addProjectField}
              value={project?.liveSiteLink}
              onChange={(e) => {
                setProjects({ ...project, liveSiteLink: e.target.value });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Thumbnail image"
              className={styles.addProjectField}
              value={project?.thumbnail}
              onChange={(e) => {
                setProjects({ ...project, thumbnail: e.target.value });
              }}
            />
          </div>

          <div>
            <textarea
              placeholder="description"
              className={`${styles.addProjectField} ${styles.projectDesc}`}
              value={project?.description}
              onChange={(e) => {
                setProjects({ ...project, description: e.target.value });
              }}
            />
          </div>
          <div>
            {technologies?.map((tech, index) => (
              <span key={index} className={styles.technology}>
                {tech}
              </span>
            ))}
          </div>
          <ImageUpload project={project} setProjects={setProjects} />
          <button
            onClick={handleCreateProject}
            className={styles.addProjectBtn}
          >
            Add project
          </button>
        </form>
      </div>
    </div>
  );
}
