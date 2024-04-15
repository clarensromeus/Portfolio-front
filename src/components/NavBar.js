import { useRef } from "react";
import "./NavBar.css";

function NavBar({children}) {
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
          {children(navMenuRef, hideNavMenu)}
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
