import Link from "next/link";
import React from "react";
import styles from "./dashboard.module.css";
import Project from "./Project";

async function getData() {
  const res = await fetch(
    "https://my-portfolio-backend-bice.vercel.app/api/get-projects",
    {
      next: { revalidate: 10 },
      credentials: "include",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return [];
  }
  return await res.json();
}

export default async function page() {
  const projects = await getData();

  return (
    <div className="container">
      <div className={styles.projectPageHeader}>
        <h2 className={styles.allProjectText}>All projects</h2>
        <div>
          <span className={styles.addProjectBtn}>
            <Link href={"/dashboard/add-project"}>Add project</Link>
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
