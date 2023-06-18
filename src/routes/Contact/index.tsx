import "./contact.css";
import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import AnimatedPage from "../../components/AnimatedPage";
import HeaderBar from "../../components/HeaderBar";

const Contact = () => {
  return (
    <>
     <HeaderBar />
    <AnimatedPage>
       
      <div className="contact">
        <div>
          <h1>Contato</h1>
        </div>
        <div className="boxes_container">
          <a href="mailto:gabrielsoaresalves@gmail.com" className="social_box email">
            <div className="contact_icon">
              <TfiEmail />
            </div>
            <h2>E-mail</h2>
          </a>
          <a href="https://wa.me/5522988517789?text=Olá!%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto"
          
          className="social_box whatsapp">
            <div className="contact_icon">
              <BsWhatsapp />
            </div>
            <h2>Whatsapp</h2>
          </a>
          <a href="https://www.linkedin.com/in/alveswebdev/" className="social_box linkedin">
            <div className="contact_icon">
              <BsLinkedin />
            </div>
            <h2>Linkedin</h2>
          </a>
          <a href="https://github.com/http-gabrielalves" className="social_box github">
            <div className="contact_icon">
              <BsGithub />
            </div>

            <h2>Github</h2>
          </a>
        </div>
      </div>
    </AnimatedPage>
    </>
  );
};

export default Contact;
