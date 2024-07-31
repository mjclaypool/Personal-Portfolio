import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import hamburgerIcon from "../assets/header--hamburger-menu.png";
import Drawer from "./Drawer";

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
      <Link to='/' id='header-title'>
        <img src={img} alt='Profile Picture' />
        <span>Mallory Claypool</span>
      </Link>
      <div id='header-nav'>
        <HashLink to="/#projects" className="nav-elem">Projects</HashLink>
        <HashLink to="/#exercises" className="nav-elem">Exercises</HashLink>
        <HashLink to="/#about" className="nav-elem">About</HashLink>
      </div>
      {isOpen && <Drawer onDone={handleDone}/>}
      <div id='header-hamburger'>
        <button type="button" onClick={handleShowDrawer}>
          <img src={hamburgerIcon} alt="Menu icon created by Febrian Hidayat - Flaticon" />
        </button>
      </div>
    </header>
  )
}