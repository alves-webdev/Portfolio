import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import  { useRef } from 'react'

function HeaderBar(): JSX.Element {
  const navRef = useRef<HTMLDivElement>(null)

  const showNavBar = () => {
    navRef.current?.classList.toggle('responsive_nav')
  }

  return (
    <header className='navbar'>
      <div className="navbar__logo">
        <h2>Gabriel</h2>
        <h2>Alves</h2>
      </div>
      <nav ref={navRef} className='navbar__links'>
      <a href="/" onClick={showNavBar}>Sobre</a>
      <a href="projects" onClick={showNavBar}>Projetos</a>
      <a href="contact" onClick={showNavBar}>Contato</a>
      <button onClick={showNavBar} className='nav-btn nav-close-btn'>
        <FaTimes />
      </button>
      </nav>
      <button onClick={showNavBar} className='nav-btn'>
        <FaBars />
      </button>
    </header>
  )
}

export default HeaderBar