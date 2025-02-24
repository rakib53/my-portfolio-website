import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import domain from "../helper/DynamicDomain";
import TechnologyCard from "./TechnologyCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("/get-projects");
        if (response.data) {
          setProjects(response.data);
        }
      } catch (error) {
        toast.error("Error fetching projects");
      }
    };

    fetchProjects();
  }, []);

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
                        src={`${domain}${project?.thumbnail?.destination}`}
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
