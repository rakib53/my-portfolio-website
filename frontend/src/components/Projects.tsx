import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import TechnologyCard from "./TechnologyCard";

const projects = [
  {
    title: "An E-comorce website for small business",
    description:
      "BECL is an e-commerce platform tailored for small businesses, providing a simple and efficient way to showcase products, manage sales, and grow online. It empowers entrepreneurs with tools to build their brand and reach more customers effortlessly.",
    githubLink: "https://github.com/rakib53/bec-frontend",
    liveSiteLink: "https://becl.com.bd/",
    technologies: ["express-js", "next-js", "mongodb", "node-js", "redux"],
    thumbnail:
      "https://res.cloudinary.com/dieulbhvc/image/upload/v1740636696/Screenshot_1_xsmv8k.png",
  },
  {
    title: "Dailyflow - An advance task management app",
    description:
      "Dailyflow is an advanced task management app designed to help individuals and teams organize, prioritize, and track their tasks efficiently. With powerful features and a user-friendly interface, it simplifies daily workflows and boosts productivity.",
    githubLink: "https://github.com/rakib53/dailyflow-todo-application",
    liveSiteLink: "https://daily-flow-pi.vercel.app/",
    technologies: ["express-js", "next-js", "mongodb", "node-js", "redux"],
    thumbnail:
      "https://res.cloudinary.com/dieulbhvc/image/upload/v1740636908/Screenshot_2_b4lzad.png",
  },
  {
    title: "Job Hiring platform",
    description:
      "JobIt is a modern job hiring platform that bridges the gap between employers and job seekers. It streamlines the hiring process with smart matching, intuitive search tools, and seamless communication for both parties.",
    githubLink: "https://github.com/rakib53/job-board-application",
    liveSiteLink: "https://job-board-frontend-beta.vercel.app/",
    technologies: ["express-js", "next-js", "mongodb", "node-js", "redux"],
    thumbnail:
      "https://res.cloudinary.com/dieulbhvc/image/upload/v1740636833/jobit_mvjwod.png",
  },
];

export default function Projects() {
  return (
    <section className="section-margin !px-4 sm:px-0" id="projects">
      {projects?.length > 0 && (
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            Discover my journey of creativity through these Projects.
          </p>
          {/* <ProjectHeader /> */}
          <div className="w-full grid items-stretch gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(370px,1fr))]">
            {projects?.map((project: any, index: number) => {
              return (
                <div
                  className="w-full p-2.5 bg-primaryCardBG rounded-2xl grid gap-4 relative"
                  key={index}
                >
                  {project?.githubLink && (
                    <div className="flex justify-center items-center absolute top-[15px] right-3 z-[10000] bg-[var(--primary-color)] bg-[#e056fd] cursor-pointer py-0 px-1.5 rounded-full">
                      <NavLink
                        to={project?.githubLink}
                        target=" "
                        className="flex items-center text-base font-semibold font-inter"
                      >
                        <BsGithub className="text-white w-[30px] h-[30px] p-1.5 cursor-pointer" />
                      </NavLink>
                    </div>
                  )}

                  <NavLink to={project?.liveSiteLink} target=" ">
                    <div className="w-full">
                      <img
                        src={project?.thumbnail}
                        className="w-full h-[200px] rounded-xl object-cover"
                        alt="projects"
                      />
                    </div>
                  </NavLink>

                  <div className="flex flex-col gap-3">
                    <NavLink to={project?.liveSiteLink} target=" ">
                      <h3 className="text-xl font-bold leading-normal text-text-color2">
                        {project?.title}
                      </h3>
                    </NavLink>
                    <p className="text-base text-text-color font-inter">
                      {project?.description}
                    </p>
                  </div>

                  <div className="flex justify-between mt-2 text-text-color2 font-medium">
                    <p>Technologies:</p>
                    <TechnologyCard project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
