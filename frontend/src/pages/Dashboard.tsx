import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import Container from "../components/Container";

export default function Page() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axiosInstance.get("/get-projects");
      console.log(response?.data);
      setProjects(response?.data);
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <div className="flex justify-between items-center mt-6">
        <h2 className="font-inter text-xl font-semibold text-text-color">
          All projects
        </h2>
        <div>
          <span className="">
            <NavLink
              to={"/dashboard/add-project"}
              className="py-2 px-4 rounded-xl text-base font-inter outline-none border-none text-text-color bg-gray-600 hover:bg-gray-700"
            >
              Add project
            </NavLink>
          </span>
        </div>
      </div>

      <div className="flex mt-5">
        {projects?.map((project, index: number) => (
          <div key={index}>
            <h1>Helo</h1>
          </div>
        ))}
      </div>
    </Container>
  );
}
