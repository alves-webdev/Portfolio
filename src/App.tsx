import "./App.css";
import HeaderBar from "../src/components/HeaderBar";
import ProfileImage from "./components/ProfileImage";
import { SkillsBar } from "./components/SkillsBar";
import { FaCode } from "react-icons/fa";
import {BiCodeCurly} from "react-icons/bi"
import AnimatedPage from "./components/AnimatedPage";

//portfolio page
function App() {
  return (
    <>
    <HeaderBar />
    <AnimatedPage>
    <div className="page">
      <div className="container_intro">
        <div className="intro__section">
          <h2>Olá, 👋 me chamo </h2>
          <h1> &lt;Gabriel<br/> Alves/&gt;</h1>
          <h2>Desenvolvedor Fullstack</h2>
        </div>
        <div className="personal__section">
              <ProfileImage />
          </div>
      </div>
      <div className="container__about">
            <div className="about__section">
              <h1 data-end="( )">sobreMim</h1>
              <p>Sou um desenvolvedor fullstack apaixonado por criar soluções digitais.
               Com um sólido background em engenharia de dados, concentro-me principalmente no desenvolvimento 
               front-end. Adoro explorar tecnologias diversas e estou sempre em busca de novos desafios que me 
               permitam expandir meu conhecimento e aprimorar minhas habilidades.
                Meu objetivo é criar experiências digitais impactantes e funcionais, 
                combinando estética e usabilidade. Sou movido pela curiosidade e pela busca incessante por 
                soluções criativas e inovadoras. Com uma abordagem orientada a resultados, estou pronto para 
                enfrentar qualquer projeto e contribuir para o sucesso da equipe.
              </p>
              

            </div>
            <div className="cta__section">
              <div className="cta__rectangle">
                <div className="rectangle__header">
                <h2> Desenvolvedor fullstack </h2>
                <FaCode size={35}/>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=19BIAHsy2vPH1cG8LDARtcACpC0_BRfkG">Currículo</a>
              </div>
              <div className="cta__rectangle">
              <div className="rectangle__header">
              <h2> Freelancer </h2>
              <BiCodeCurly size={35}/>
              </div>
                <a href="/contact">Me contrate!</a>
              </div>
            </div>
      </div>
      <div className="container__skills">
        <SkillsBar />
      </div>
    </div>
    </AnimatedPage>
    </>
  );
}

export default App;
