import "./profile.scss"
import Profile from '../../assets/profile.png';
import {  SiCss3, SiHtml5, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiPostgresql, SiGit, SiVisualstudiocode, SiJavascript
} from 'react-icons/si';

function ProfileImage() {
  return (
    <div className="orbit">
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <img src={Profile} alt="profile" className="orbit-image" />
        </li>

        <li>
          <ul className="ring-1">
            <li><SiCss3 className="orbit-icon css" /></li>
            <li><SiHtml5 className="orbit-icon html" /></li>
          </ul>
        </li>

        <li>
          <ul className="ring-2">
            <li><SiGit className="orbit-icon git" /></li>
            <li><SiPostgresql className="orbit-icon postgres" /></li>
            <li><SiMongodb className="orbit-icon mongodb" /></li>
            <li><SiMysql className="orbit-icon mysql" /></li>
            <li><SiVisualstudiocode className="orbit-icon vscode" /></li>
          </ul>
        </li>

        <li>
          <ul className="ring-3">
            <li><SiReact className="orbit-icon react" /></li>
            <li><SiNodedotjs className="orbit-icon nodejs" /></li>
            <li><SiJavascript className="orbit-icon javascript" /></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}


export default ProfileImage;