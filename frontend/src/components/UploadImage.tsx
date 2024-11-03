import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../axios/axiosInstance";

interface UploadThumbnailProps {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const UploadThumbnail = ({
  selectedFile,
  setSelectedFile,
}: UploadThumbnailProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState("");

  // Select the file to upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setSelectedFile(file || null);
      // Create a URL for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Removing uploaded images
  const handleRemovePhoto = () => {
    setSelectedFile(null);
  };

  // Upload file to the server
  const uploadFile = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!selectedFile) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axiosInstance.post("/upload-thumbnail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("File uploaded successfully!", { position: "top-right" });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error("Failed to upload file.", { position: "top-right" });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to upload file.", { position: "top-right" });
    }
  };

  return (
    <div className="max-w-[300px] flex flex-col">
      <div className="w-full flex flex-col gap-3">
        <label
          htmlFor="fileInput"
          className="text-text-color font-medium font-inter"
        >
          Attachment
        </label>
        <div className="!w-[300px] relative bg-primaryCardBG py-4 rounded-xl">
          {selectedFile ? (
            <div className="mt-2">
              {/* Remove file icon  */}
              <span
                className="absolute top-6 right-6 cursor-pointer"
                onClick={handleRemovePhoto}
              >
                <svg
                  stroke="#e74c3c"
                  fill="#e74c3c"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </span>
              {preview && (
                <div className="w-full flex flex-col gap-2">
                  <img
                    src={preview}
                    alt="Selected preview"
                    className="w-full h-[100px] object-contain"
                  />
                  <p className="!w-full break-words p-4 inline-block text-center text-text-color font-inter text-sm">
                    {selectedFile.name}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div
              className="w-full relative min-h-[200px] flex justify-center items-center"
              style={{
                boxShadow: "-1px 4px 110px 9px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="flex justify-center items-center p-3">
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  className="absolute top-0 right-0 w-full h-full opacity-0 font-inter text-text-color font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize cursor-pointer"
                />
                <span
                  className="w-full flex flex-col justify-center text-center text-text-color2 font-inter text-base"
                  onClick={() => {
                    const fileInput = document.getElementById(
                      "fileInput"
                    ) as HTMLInputElement | null;
                    fileInput?.click();
                  }}
                >
                  <span>Drag file here to upload or</span>
                  <span className="text-[#0070D2]">browse</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {selectedFile && (
          <button
            onClick={uploadFile}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isLoading ? "uploading..." : "Upload"}
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadThumbnail;
