import EXPRESS from "/skills/express.png";
import MONGODB from "/skills/mongodb.png";
import NEXTJS from "/skills/nextjs.jpg";
import NODE from "/skills/nodejs.png";
import REDUX from "/skills/redux.png";

// Define the technology keys as a TypeScript union type
type Technology = "express-js" | "next-js" | "mongodb" | "node-js" | "redux";

// Define the image map with specific keys
const TECHNOLOGY_IMAGES: Record<Technology, string> = {
  "express-js": EXPRESS,
  "next-js": NEXTJS,
  mongodb: MONGODB,
  "node-js": NODE,
  redux: REDUX,
};

// Define the project type
interface Project {
  technologies: Technology[];
}

// Define the props type for TechnologyCard
interface TechnologyCardProps {
  project: Project;
}

export default function TechnologyCard({ project }: TechnologyCardProps) {
  if (!project?.technologies) return null;

  return (
    <div className="flex items-center gap-[5px]">
      {project.technologies.map((tech, index) => {
        const src = TECHNOLOGY_IMAGES[tech];

        return src ? (
          <img
            key={index}
            width={100}
            height={100}
            className="w-[25px] h-[25px] rounded-3xl"
            src={src}
            alt={`${tech} technology`}
          />
        ) : null;
      })}
    </div>
  );
}
