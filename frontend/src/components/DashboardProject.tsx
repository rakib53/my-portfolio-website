import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";

export interface ProjectInfo {
  _id?: string;
  title: string;
  githubLink: string;
  liveSiteLink: string;
  description: string;
  thumbnail: {
    destination: string;
  };
  technologies: string[];
}

export default function DashboardProject({
  project,
}: {
  project: ProjectInfo;
}) {
  const handleDeleteProject = async (id: string) => {
    try {
      const isDeletedProject = await axiosInstance.delete(
        `/delete-project/projects?id=${id}`
      );

      if (isDeletedProject?.data?._id) {
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

  return (
    <div className="bg-primaryCardBG p-2 rounded-xl">
      <Toaster />
      <div className="w-full mb-3">
        <img
          src={`http://localhost:5000${project?.thumbnail?.destination}`}
          className="w-full h-[200px] object-cover rounded-xl"
          alt=""
        />
      </div>
      <h1 className="text-text-color text-lg font-inter font-medium">
        {project?.title}
      </h1>
      <p className="text-text-color2 text-base font-inter font-medium">
        {project?.description}
      </p>
      <div className="flex justify-between items-center mt-2">
        <NavLink
          to={`/dashboard/edit-project/${project._id}`}
          className="bg-green-500 py-1 px-5 text-white rounded-lg"
        >
          Edit
        </NavLink>
        <button
          className="bg-red-500 text-white py-1 px-5 rounded-lg"
          onClick={() => handleDeleteProject(project?._id!)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
