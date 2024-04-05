"use client";

import React, { useState } from "react";
import styles from "./dashboard.module.css";

export default function Project(props) {
  const { project } = props;
  const [isOpenOption, setIsOpenOption] = useState(false);

  const handleDeleteProject = async (id) => {
    const deleteProject = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCTION_API}/delete-project/projects?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );
    const deleteResponse = await deleteProject.json();

    if (deleteResponse?._id) {
      alert("Deleted project!");
    } else {
      alert("Error deleting project!");
    }
  };
  const handleEditProject = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.dashboardProject}>
      <img src={project?.thumbnail} alt="" className={styles.projectImage} />
      <h1 className={styles.projectTitle}>{project?.title}</h1>
      <h1 className={styles.projectDesc}>{project?.description}</h1>

      <div
        className={styles.moreOption}
        onClick={(e) => setIsOpenOption(!isOpenOption)}
      >
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
          </svg>
        </span>
      </div>

      {isOpenOption && (
        <div className={styles.options}>
          <span
            className={styles.option}
            onClick={() => handleEditProject(project?._id)}
          >
            Edit
          </span>
          <span
            className={styles.option}
            onClick={() => handleDeleteProject(project?._id)}
          >
            Delete
          </span>
        </div>
      )}
    </div>
  );
}
