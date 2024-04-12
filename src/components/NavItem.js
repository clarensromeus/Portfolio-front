import React from 'react'

export default function NavItem(navMenuRef, hideNavMenu) {
  return (
    <>
      <ul ref={navMenuRef} className="nav-menu">
            <li className="nav-item"><a href="#aboutme" aria-label='Go to about me' className="nav-link" onClick={hideNavMenu}>About Me</a></li>
            <li className="nav-item"><a href="#skills" aria-label='Go to skills' className="nav-link" onClick={hideNavMenu}>Skills</a></li>
            <li className="nav-item"><a href="#projects" aria-label='Go to projects' className="nav-link" onClick={hideNavMenu}>Projects</a></li>
            <li className="nav-item"><a href="#blogs" aria-label='Go to blogs' className="nav-link" onClick={hideNavMenu}>Blogs</a></li>
            <li className="nav-item"><a href="#contact" aria-label='Go to contact me' className="nav-link" onClick={hideNavMenu}>Contact</a></li>
      </ul>
      <strong style={{color: "white", backgroundColor: "red"}}>onluy one dev</strong>
    </>
  )
}
