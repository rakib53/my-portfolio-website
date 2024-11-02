import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Container from "../components/Container";
import UploadThumbnail from "../components/UploadImage";

interface Project {
  title: string;
  githubLink: string;
  liveSiteLink: string;
  description: string;
  technologies: string[];
}

export default function AddProject() {
  const [project, setProjects] = useState<Project>({
    title: "",
    githubLink: "",
    liveSiteLink: "",
    description: "",
    technologies: [],
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSetFilterStack = (value: string) => {
    setProjects((prevProject) => {
      const isExistTechnology = prevProject.technologies.includes(value);
      return {
        ...prevProject,
        technologies: isExistTechnology
          ? prevProject.technologies.filter((tech) => tech !== value)
          : [...prevProject.technologies, value],
      };
    });
  };

  const validateForm = (): boolean => {
    const validationErrors = [];
    if (!project.title) validationErrors.push("Title is required.");
    if (!project.githubLink) validationErrors.push("GitHub link is required.");
    if (!project.liveSiteLink)
      validationErrors.push("Live site link is required.");
    if (!project.description) validationErrors.push("Description is required.");
    if (!project.technologies.length)
      validationErrors.push("At least one technology is required.");
    if (!selectedFile) validationErrors.push("Thumbnail is required.");

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleCreateProject = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
      });
      return;
    }
    console.log({
      ...project,
      thumbnail: selectedFile,
    });
    try {
      // await axiosInstance.post("/create-project", {
      //   ...project,
      //   thumbnail: selectedFile,
      // });
      toast.success("Project added successfully.", { position: "top-right" });
    } catch (error) {
      toast.error("Error while adding project", { position: "top-right" });
      console.error("Error adding project:", error);
    }
  };

  return (
    <div>
      <Container>
        <Toaster />
        <div className="mt-6">
          <form action="" className="flex flex-col gap-4">
            {errors.length > 0 && (
              <div className="text-red-500 mb-4">
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            )}

            {/* Title */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="title"
                className="text-text-color font-medium font-inter"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={project.title}
                onChange={(e) =>
                  setProjects((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter your title"
                className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
              />
            </div>

            {/* GitHub Link */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="githubLink"
                className="text-text-color font-medium font-inter"
              >
                GitHub Link
              </label>
              <input
                type="text"
                id="githubLink"
                value={project.githubLink}
                onChange={(e) =>
                  setProjects((prev) => ({
                    ...prev,
                    githubLink: e.target.value,
                  }))
                }
                placeholder="Enter your GitHub link"
                className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
              />
            </div>

            {/* Live Site Link */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="liveSiteLink"
                className="text-text-color font-medium font-inter"
              >
                Live Site Link
              </label>
              <input
                type="text"
                id="liveSiteLink"
                value={project.liveSiteLink}
                onChange={(e) =>
                  setProjects((prev) => ({
                    ...prev,
                    liveSiteLink: e.target.value,
                  }))
                }
                placeholder="Enter your live site link"
                className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
              />
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-2 my-2">
              <span className="text-text-color font-medium font-inter">
                Technologies
              </span>
              <div className="flex items-center gap-3">
                {[
                  "react-js",
                  "next-js",
                  "node-js",
                  "express-js",
                  "mongodb",
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`text-base inline-block py-2.5 px-5 rounded-[20px] cursor-pointer ${
                      project.technologies.includes(tech)
                        ? "bg-green-500 text-white"
                        : "bg-[#112240] text-[#ccd6f6]"
                    }`}
                    onClick={() => handleSetFilterStack(tech)}
                  >
                    {tech.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>

            {/* Upload Thumbnail */}
            <UploadThumbnail
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />

            {/* Description */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="description"
                className="text-text-color font-medium font-inter"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={5}
                value={project.description}
                onChange={(e) =>
                  setProjects((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Enter your description"
                className="w-full max-h-[200px] h-full resize-none p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                className="py-2 px-8 rounded-xl bg-green-600 hover:bg-green-700 text-white"
                onClick={handleCreateProject}
              >
                Add Project
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}