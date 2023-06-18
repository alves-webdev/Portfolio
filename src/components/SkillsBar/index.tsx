import "./skillsbar.css";
import { FaReact, FaVuejs, FaPython } from "react-icons/fa";
import { SiRubyonrails, SiNextdotjs, SiHtml5, SiCss3, SiNodedotjs, SiJavascript, SiTypescript, SiMongodb } from "react-icons/si";
import {BsGit} from "react-icons/bs"

export const SkillsBar = () => {
  return (
    <div className="skills__container">
      <div className="skills__header">
        <h1 data-end="( )">skills</h1>
      </div>
      <div className="skills__box">
        <div className="icon_skill javascript">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="icon_skill typescript">
          <SiTypescript />
          <p>TypeScript</p>
        </div>
        <div className="icon_skill react">
          <FaReact />
          <p>React</p>
        </div>
        <div className="icon_skill html">
          <SiHtml5 />
          <p>HTML5</p>
        </div>
        <div className="icon_skill css">
          <SiCss3 />
          <p>CSS3</p>
        </div>
        <div className="icon_skill node">
          <SiNodedotjs />
          <p>Node.js</p>
        </div>
        <div className="icon_skill vue">
          <FaVuejs />
          <p>Vue.js</p>
        </div>
        <div className="icon_skill python">
          <FaPython />
          <p>Python</p>
        </div>
        <div className="icon_skill ror">
          <SiRubyonrails />
          <p>Ruby on Rails</p>
        </div>
        <div className="icon_skill git">
            <BsGit />
            <p>GIT</p>
        </div>
        <div className="icon_skill mongodb">
            <SiMongodb />
            <p>MonboDB</p>
        </div>
        <div className="icon_skill next">
            <SiNextdotjs />
            <p>next</p>
        </div>
      </div>
    </div>
  );
};
