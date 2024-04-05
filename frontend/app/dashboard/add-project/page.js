"use client";

import React, { useState } from "react";
import styles from "../../styles/AddProject.module.css";
import ImageUpload from "../../components/UploadImage";
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
    password: "",
    technologies: ["reactjs", "nodejs", "expressjs", "mongodb"],
  });

  const handleCreateProject = async (event) => {
    event.preventDefault();
    if (project?.password === "Rakib$$12") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", authentication: "sdsd" },
        body: JSON.stringify({
          title: project?.title,
          description: project?.description,
          liveSiteLink: project?.liveSiteLink,
          githubLink: project?.githubLink,
          thumbnail: project?.imageLink || project?.thumbnail,
          technologies: ["reactjs", "nodejs", "expressjs", "mongodb"],
        }),
        Credential: true,
      };
      const createProject = await fetch(
        `${process.env.NEXT_PUBLIC_LOCALHOST_API}/create-project`,
        requestOptions
      );
      const data = await createProject.json();
    } else {
      alert("You're not the owner of this portfolio!");
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
            <input
              type="text"
              placeholder="Enter password"
              className={styles.addProjectField}
              value={project?.password}
              onChange={(e) => {
                setProjects({ ...project, password: e.target.value });
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
