"use client";

import React, { useState } from "react";

const ImageUpload = ({ project, setProjects }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileUpload = async (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadError(null);
    setImageUrl(null);
    setIsImageUploading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=d43341cd270b3303158049b5ccfc94d5",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data?.data) {
        setImageUrl(data?.data?.url);
        setProjects({
          ...project,
          imageLink: data?.data?.url,
        });
        setIsImageUploading(false);
      } else {
        setUploadError(data?.error?.message);
        setIsImageUploading(false);
      }
    } catch (err) {
      setUploadError("Upload failed");
      setIsImageUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
      <div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded Image"
            style={{
              width: "300px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        )}
      </div>
      <div>{isImageUploading && <h1>Loading....</h1>}</div>
    </div>
  );
};

export default ImageUpload;
