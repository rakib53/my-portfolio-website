import { NavLink } from "react-router-dom";
import domain from "../helper/DynamicDomain";

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
  handleDeleteProject,
}: {
  project: ProjectInfo;
  handleDeleteProject: any;
}) {
  return (
    <div className="bg-primaryCardBG p-2 rounded-xl">
      <div className="w-full mb-3">
        <img
          src={`${domain}${project?.thumbnail?.destination}`}
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
