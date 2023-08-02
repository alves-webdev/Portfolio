import "./App.css";
import HeaderBar from "../src/components/HeaderBar";
import ProfileImage from "./components/ProfileImage";
import { SkillsBar } from "./components/SkillsBar";
import { FaCode } from "react-icons/fa";
import {BiCodeCurly} from "react-icons/bi"
import AnimatedPage from "./components/AnimatedPage";
import { useTranslation } from 'react-i18next';

//portfolio page
function App() {
  const { t } = useTranslation();


  return (
    <>
    <HeaderBar />
    <AnimatedPage>
    <div className="page">
      <div className="container_intro">
        <div className="intro__section">
          <h2>{t('header')} </h2>
          <h1> &lt;Gabriel<br/> Alves/&gt;</h1>
          <h2>{t('mytitle')}</h2>
        </div>
        <div className="personal__section">
              <ProfileImage />
          </div>
      </div>
      <div className="container__about">
            <div className="about__section">
              <h1 data-end="( )">{t('aboutTitle')}</h1>
              <p>{t('aboutmessage')}
              </p>
              

            </div>
            <div className="cta__section">
              <div className="cta__rectangle">
                <div className="rectangle__header">
                <h2> {t('card1')} </h2>
                <FaCode size={35}/>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=19BIAHsy2vPH1cG8LDARtcACpC0_BRfkG">{t('card1.1')}</a>
              </div>
              <div className="cta__rectangle">
              <div className="rectangle__header">
              <h2> {t('card2')} </h2>
              <BiCodeCurly size={35}/>
              </div>
                <a href="/contact">{t('card2.1')}</a>
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
