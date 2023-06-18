import "./projects.css"
import HeaderBar from "../../components/HeaderBar";
import AnimatedPage from "../../components/AnimatedPage";
import ProjectCard from "../../components/ProjectCard";


const projetos = [
  {
    title: "Editor de texto",
    image: "https://i.imgur.com/JeLFvLd.png",
    link: "https://i.imgur.com/v4KtANY.mp4",
    description: "Um editor de texto inspirado no notion para gerenciamento de conteúdo educacional. [código privado]",
    technologiesUsed: ["react", "tailwind", "javascript"],
  },
  {
    title: "BlueAcademy",
    image: "https://i.imgur.com/aYtSXi0.png",
    description: "Uma plataforma online para ensino in-house [Projeto legado, código privado]",
    technologiesUsed: ["PHP", "javascript", "CSS", "HTML"]
  },
  {
    title: "pokeapp",
    image: "https://imgur.com/evidsz4.jpg",
    link: "https://pokeapp-navy.vercel.app/",
    description: "Um jogo simples de 'quem é esse pokemon?', o usuário deve adivinhar o pokémon utilizando a silhueta",
    technologiesUsed: ["nextjs", "react", "tailwind", "typescript"],
  },
  {
    title: "Galler-IA",
    image: "https://i.imgur.com/oEAiOvC.png",
    link: "https://galler-ia.vercel.app/",
    description: "uma galeria online onde usuários podem gerar imagens com a API da openAI e compartilha-las",
    technologiesUsed: ["nextjs", "tailwind", "mongodb", "typescript"]
  },
  {
    title: "lista SaperX",
    image: "https://github.com/http-gabrielalves/Saperx/blob/master/public/img1.png?raw=true",
    link: "https://github.com/http-gabrielalves/Saperx/tree/master",
    description: "um CRUD de lista telefonica, atualmente offline porém com código funcional",
    technologiesUsed: ["typescript", "react", "css"]
  },
  {
    title: "farmstech",
    image: "https://i.imgur.com/H8p2Wjy.png",
    link: "https://i.imgur.com/NfBE1cu.mp4",
    description: "Uma interface para controle de dispositivos IOT a distância [Código Privado]",
    technologiesUsed: ["typescript", "react", "css"]
  }
  
];


const Projects = () => {
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
                description={project.description}
                title={project.title}
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