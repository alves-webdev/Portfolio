import {FaHtml5, FaCss3, FaReact} from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";
import {DiJavascript1, DiPhp} from "react-icons/di"
import "./projectcard.css"

interface ProjectCardProps {
    image: string;
    projectLink?: string;
    description: string;
    title: string;
    technologiesUsed: string[];
  }  

  const getTechnologyIcon = (technology: string) => {
    switch (technology.toLowerCase()) {
      case 'html':
        return <FaHtml5 />;
      case 'css':
        return <FaCss3 />;
      case 'react':
        return <FaReact />;
    case 'nextjs':
        return <SiNextdotjs/>;
    case 'typescript':
        return <SiTypescript/>;
    case 'tailwind':
        return <SiTailwindcss/>;
    case 'mongodb':
        return <SiMongodb />;
    case 'javascript':
      return <DiJavascript1/>;
    case 'php':
      return <DiPhp />;
      default:
        return null;
    }
  };
  

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    projectLink,
    description,
    title,
    technologiesUsed,
  }) => {
    return (
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <div className="project-card-image-container">
              <img src={image} alt={title} className="project-card-image" />
            </div>
            <div className="project-card-body">
              <h3 className="project-card-title">{title}</h3>
              <p className="project-card-description">{description}</p>
              <div className="project-card-technologies">
                {technologiesUsed.map((tech, index) => (
                  <span key={index} className="project-card-tech-icon">
                    {getTechnologyIcon(tech)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      );
    };
  

export default ProjectCard;