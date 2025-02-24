import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import Container from "../components/Container";
import DashboardProject from "../components/DashboardProject";
import Navbar from "../components/Navbar";

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Handle Delete a project
  const handleDeleteProject = async (id: string) => {
    try {
      const isDeletedProject = await axiosInstance.delete(
        `/delete-project/projects?id=${id}`
      );

      if (isDeletedProject?.data?._id) {
        const filterOutRemovedProject = projects.filter((project: any) => {
          return project?._id !== id;
        });
        setProjects(filterOutRemovedProject);
        toast.success("Deleted project!", {
          position: "top-right",
        });
      } else {
        toast.error("Error deleting project!", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Error deleting project!", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axiosInstance.get("/get-projects");
      setIsLoading(false);
      setProjects(response?.data);
    };

    fetchProjects();
  }, []);

  let showContent;

  if (isLoading) {
    showContent = (
      <div className="w-full flex justify-center items-center h-[400px]">
        <div className="dashboardProjectLoader"></div>
      </div>
    );
  }

  if (!isLoading) {
    showContent = (
      <div className="w-full grid items-stretch gap-8 grid-cols-[repeat(auto-fit,minmax(370px,1fr))] mt-5">
        {projects?.length > 0 ? (
          projects?.map((project, index: number) => (
            <DashboardProject
              project={project}
              key={index}
              handleDeleteProject={handleDeleteProject}
            />
          ))
        ) : (
          <div className="flex justify-center py-12">
            <h2 className="text-white font-medium text-lg">
              No Project found!
            </h2>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Toaster />
      <Container>
        <div className="flex justify-between items-center mt-16">
          <h2 className="font-inter text-xl font-semibold text-text-color">
            All projects
          </h2>
          <div>
            <span className="">
              <NavLink
                to={"/dashboard/add-project"}
                className="py-2 px-4 rounded-xl text-base font-inter outline-none border-none text-white bg-green-600 hover:bg-green-700"
              >
                Add project
              </NavLink>
            </span>
          </div>
        </div>

        {showContent}
      </Container>
    </div>
  );
}
