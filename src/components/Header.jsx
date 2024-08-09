import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Drawer from "./Drawer";
import hamburgerIcon from "../assets/header--menu.png";

export default function Header( {img} ) {
  const [isOpen, setIsOpen] = useState(false)

  function handleShowDrawer() {
    setIsOpen(true);
  }

  function handleDone() {
    setIsOpen(false);
  }

  return (
    <header id='main-header'>
      <Link to='/Personal-Portfolio/' id='header-title' aria-label="return-to-homepage">
        <img src={img} alt='Profile Picture' />
        <span>Mallory Claypool</span>
      </Link>
      <div id='header-nav'>
        <HashLink to="/Personal-Portfolio/#projects" className="nav-elem">Projects</HashLink>
        <HashLink to="/Personal-Portfolio/#exercises" className="nav-elem">Exercises</HashLink>
        <HashLink to="/Personal-Portfolio/#about" className="nav-elem">About</HashLink>
      </div>
      {isOpen && <Drawer onDone={handleDone}/>}
      <div id='header-hamburger'>
        <button type="button" aria-label="navigation-menu-open" onClick={handleShowDrawer}>
          <img src={hamburgerIcon} alt="Freepik menu icon - Flaticon" />
        </button>
      </div>
    </header>
  )
}