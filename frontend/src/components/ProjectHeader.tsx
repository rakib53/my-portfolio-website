import { useState } from "react";

export default function ProjectHeader() {
  const [filterStack, setFilterStack] = useState("");

  const handleSetFilterStack = (value: string) => {
    setFilterStack(value);
  };

  return (
    <div className="flex items-center justify-start gap-8 mb-6">
      <span className="hidden">{filterStack}</span>
      <span
        className="text-[#ccd6f6] text-base inline-block py-2.5 px-5 rounded-[20px] bg-[#112240]"
        onClick={() => handleSetFilterStack("react-js")}
      >
        React js
      </span>
      <span
        className="text-[#ccd6f6] text-base inline-block py-2.5 px-5 rounded-[20px] bg-[#112240]"
        onClick={() => handleSetFilterStack("next-js")}
      >
        Next js
      </span>
      <span
        className={`text-[#ccd6f6] text-base inline-block py-2.5 px-5 rounded-[20px] bg-[#28539d] `}
        onClick={() => handleSetFilterStack("tailwind-css")}
      >
        Tailwind
      </span>
      <span
        className="text-[#ccd6f6] text-base inline-block py-2.5 px-5 rounded-[20px] bg-[#112240]"
        onClick={() => handleSetFilterStack("frontend")}
      >
        Frontend
      </span>
      <span
        className="text-[#ccd6f6] text-base inline-block py-2.5 px-5 rounded-[20px] bg-[#112240]"
        onClick={() => handleSetFilterStack("backend")}
      >
        Backend
      </span>
      <span
        className="text-[#ccd6f6] text-base inline-block py-2.5 px-5 rounded-[20px] bg-[#112240]"
        onClick={() => handleSetFilterStack("responsive")}
      >
        Responsive
      </span>
    </div>
  );
}
