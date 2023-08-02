import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import brflag from "../../assets/brflag.svg";
import ukflag from "../../assets/enflag.svg";
import { t } from 'i18next';
import i18n from '../../i18n';

function HeaderBar(): JSX.Element {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    navRef.current?.classList.toggle('responsive_nav');
  };

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng); // Store the selected language in localStorage
  };

  // This useEffect will run once when the component is mounted
  useEffect(() => {
    const selectedLanguage = localStorage.getItem("appLanguage"); // Retrieve the stored language
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage); // Set the retrieved language as the current language
    }
  }, []);

  return (
    <header className='navbar'>
      <div className="navbar__logo">
        <h2>Gabriel</h2>
        <h2>Alves</h2>
      </div>
      <nav ref={navRef} className='navbar__links'>
        <a href="/" onClick={showNavBar}>{t('about')}</a>
        <a href="projects" onClick={showNavBar}>{t('projects')}</a>
        <a href="contact" onClick={showNavBar}>{t('contact')}</a>
        <button onClick={showNavBar} className='nav-btn nav-close-btn'>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavBar} className='nav-btn'>
        <FaBars />
      </button>
      <div className="lang-btns">
      <button onClick={() => changeLanguage('pt')} className="language-btn">
        <img src={brflag} alt="Portuguese Flag" className="flag-icon" />
      </button>
      <button onClick={() => changeLanguage('en')} className="language-btn">
        <img src={ukflag} alt="UK Flag" className="flag-icon" />
      </button>
      </div>
    </header>
  );
}

export default HeaderBar;
