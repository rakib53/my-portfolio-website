interface UploadThumbnailProps {
  selectedFile: File | null;
  setSelectedFile: any;
}

const UploadThumbnail = ({
  selectedFile,
  setSelectedFile,
}: UploadThumbnailProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-3">
        <label
          htmlFor="fileInput"
          className="text-text-color font-medium font-inter"
        >
          Attachment
        </label>
        <div
          className="focus:bg-primaryCardBG relative w-full bg-primaryCardBG flex justify-center py-4 rounded-xl overflow-hidden"
          style={{
            boxShadow: "-1px 4px 110px 9px rgba(0, 0, 0, 0.06)",
          }}
        >
          {selectedFile ? (
            <div className="mt-2 font-inter text-[14px]">
              <p className="w-full text-center text-text-color font-inter text-[16px] md:text-[18px]">
                Uploaded file: {selectedFile.name}
              </p>
            </div>
          ) : (
            <>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className="absolute top-0 right-0 w-full h-full opacity-0 font-inter text-text-color font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize cursor-pointer"
              />
              <span
                className="w-full text-center text-text-color2 font-inter text-[16px] md:text-[18px]"
                onClick={() => {
                  const fileInput = document.getElementById(
                    "fileInput"
                  ) as HTMLInputElement | null;
                  fileInput?.click();
                }}
              >
                Drag file here to upload or{" "}
                <span className="text-[#0070D2]">browse</span>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadThumbnail;
