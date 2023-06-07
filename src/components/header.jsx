import React from 'react'

const header = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="max-width">
        <div className="logo"><a href="/"><span>/AM/</span></a></div>
        <ul className="menu">
          <li><a href="#home" className="menu-btn"><strong>Home</strong></a></li>
          <li><a href="#about" className="menu-btn"><strong>About</strong></a></li>
          {/* <li><a href="#services" class="menu-btn"><strong>Services</strong></a></li> */}
          <li><a href="#skills" className="menu-btn"><strong>Skills</strong></a></li>
          <li><a href="#projects" className="menu-btn"><strong>Projects</strong></a></li>
          <li><a href="#contact" className="menu-btn"><strong>Contact</strong></a></li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars" />
        </div>
      </div>
    </nav>
    </div>
  )
}

export default header