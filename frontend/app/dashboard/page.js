"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import Project from "./Project";

// Fetching all projects
const getAllProjects = async () => {
  try {
    const getProjects = await axios.get(
      `${
        process.env.NEXT_PUBLIC_NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_PRODUCTION_API
          : process.env.NEXT_PUBLIC_LOCALHOST_API
      }/get-projects`
    );
    return getProjects.data; // Correctly accessing the data from the axios response
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of error to avoid breaking the UI
  }
};

export default function Page() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      setProjects(data); // Set the fetched projects to state
    };

    fetchProjects();
  }, []);

  return (
    <div className="container">
      <div className={styles.projectPageHeader}>
        <h2 className={styles.allProjectText}>All projects</h2>
        <div>
          <span className={styles.addProjectBtn}>
            <Link href={"/dashboard/add-project"} className="addProjectBtn">
              Add project
            </Link>
          </span>
        </div>
      </div>

      <div className={styles.allProjects}>
        {projects?.map((project) => (
          <Project project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
}
