import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import hamburgerIcon from "../assets/header--hamburger-menu.png";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  function handleToggle(newSetting) {
    setOpen(newSetting);
  }
  return (
    <div id='header-hamburger'>
      <button type="button" onClick={() => handleToggle(true)}>
        <img src={hamburgerIcon} alt="Menu icon created by Febrian Hidayat - Flaticon" />
      </button>
      {open && (
        <div id="drawer">
          <Link to='/' id='header-title' className="drawer-elem" onClick={() => handleToggle(false)}>Home</Link>
          <hr/>
          <HashLink to="/#projects" className="drawer-elem" onClick={() => handleToggle(false)}>Projects</HashLink>
          <HashLink to="/#exercises" className="drawer-elem" onClick={() => handleToggle(false)}>Exercises</HashLink>
          <HashLink to="/#about" className="drawer-elem" onClick={() => handleToggle(false)}>About</HashLink>
        </div>
      )}
    </div>
  )
}