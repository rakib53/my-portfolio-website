import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import { ProjectInfo } from "../components/DashboardProject";
import AddProject from "./AddProject";

function EditProject() {
  // Destructure the parameter from useParams
  const { project_id } = useParams();
  const [projectData, setProjectData] = useState<ProjectInfo | null>();
  // const [isProjectDataLoading, setIsProductLoading] = useState(false);

  useEffect(() => {
    const getProjectInfo = async () => {
      const response = await axiosInstance.get(`/get-project/${project_id}`);
      if (response.status === 200) {
        setProjectData(response?.data);
      } else {
        setProjectData(null);
        toast.error("Something went wrong");
      }
    };
    getProjectInfo();
  }, [project_id]);

  return (
    <div>
      <Toaster />
      <AddProject projectData={projectData} />
    </div>
  );
}

export default EditProject;
