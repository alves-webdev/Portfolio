import "./projects.css"
import HeaderBar from "../../components/HeaderBar";
import AnimatedPage from "../../components/AnimatedPage";
import ProjectCard from "../../components/ProjectCard";
import { useTranslation } from 'react-i18next';


const projetos = [
  {
    title: "EditorTitle",
    image: "https://i.imgur.com/JeLFvLd.png",
    link: "https://i.imgur.com/v4KtANY.mp4",
    description: "EditorDescription",
    technologiesUsed: ["react", "tailwind", "javascript"],
  },
  {
    title: "BlueAcademy",
    image: "https://i.imgur.com/aYtSXi0.png",
    description: "BlueAcademyDescription",
    technologiesUsed: ["PHP", "javascript", "CSS", "HTML"]
  },
  {
    title: "PokeApp",
    image: "https://imgur.com/evidsz4.jpg",
    link: "https://pokeapp-navy.vercel.app/",
    description: "PokeAppDescription",
    technologiesUsed: ["nextjs", "react", "tailwind", "typescript"],
  },
  {
    title: "Galler-IA",
    image: "https://i.imgur.com/oEAiOvC.png",
    link: "https://galler-ia.vercel.app/",
    description: "Galler-IAdesc",
    technologiesUsed: ["nextjs", "tailwind", "mongodb", "typescript"]
  },
  {
    title: "listaSaperX",
    image: "https://github.com/http-gabrielalves/Saperx/blob/master/public/img1.png?raw=true",
    link: "https://github.com/http-gabrielalves/Saperx/tree/master",
    description: "listaSaperXdesc",
    technologiesUsed: ["typescript", "react", "css"]
  },
  {
    title: "Farmstech",
    image: "https://i.imgur.com/H8p2Wjy.png",
    link: "https://i.imgur.com/NfBE1cu.mp4",
    description: "farmstechdesc",
    technologiesUsed: ["typescript", "react", "css"]
  }
  
];


const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
    <HeaderBar/>
    <AnimatedPage>
    <div className="projetos__container">
      <div className="projetos__header">
        <h1>
          Projetos
        </h1>
      </div>
      <div className="cards__container">
      {projetos.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                projectLink={project.link}
                description={t(project.description)}
                title={t(project.title)}
                technologiesUsed={project.technologiesUsed}
              />
            ))}
      </div>

    </div>
    </AnimatedPage>
    </>
  )
}

export default Projects