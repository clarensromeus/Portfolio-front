import { useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef();
  const hamburgerRef = useRef();
  const navMenuRef = useRef();


  function showHamburger() {
    navRef.current.classList.toggle("active")
    hamburgerRef.current.classList.toggle("active")
    navMenuRef.current.classList.toggle("active")
  }

  function hideNavMenu() {
    navMenuRef.current.classList.toggle("active")
    navRef.current.classList.toggle("active")
    hamburgerRef.current.classList.toggle("active")
  }

  return (
    <header>
      <nav ref={navRef} className="container-navbar">
        <ul className="container-logo">
          <li>
            <a className='home-link' href="#home" aria-label='Go back to top of webpage'>
              <div className="navbar-name"><span className="navbar-initial">R</span>omeus <span className="navbar-initial">C</span>larens</div>
            </a>
          </li>
        </ul>
        <div>
          <ul ref={navMenuRef} className="nav-menu">
            <li className="nav-item"><a href="#aboutme" aria-label='Go to about me' className="nav-link" onClick={hideNavMenu}>About Me</a></li>
            <li className="nav-item"><a href="#skills" aria-label='Go to skills' className="nav-link" onClick={hideNavMenu}>Skills</a></li>
            <li className="nav-item"><a href="#projects" aria-label='Go to projects' className="nav-link" onClick={hideNavMenu}>Projects</a></li>
            <li className="nav-item"><a href="#blogs" aria-label='Go to blogs' className="nav-link" onClick={hideNavMenu}>Blogs</a></li>
            <li className="nav-item"><a href="#contact" aria-label='Go to contact me' className="nav-link" onClick={hideNavMenu}>Contact</a></li>
          </ul>
          <div ref={hamburgerRef} className="hamburger" onClick={showHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
