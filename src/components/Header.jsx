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
    <header id='main-header' className="flex gap-8 justify-between items-center p-8 my-0 mx-auto font-bold">
      <Link to='/' aria-label="return-to-homepage" className="flex gap-4 items-center">
        <img src={img} alt='Profile Picture' className="w-16 h-16 object-contain border-2 border-n-light-grey rounded-full" />
        <span className="text-xl">Mallory Claypool</span>
      </Link>
      <div className="hidden xl:block">
        <HashLink to="/#projects" className="hover:text-p-ice-blue focus:text-p-ice-blue">Projects</HashLink>
        <HashLink to="/#exercises" className="hover:text-p-ice-blue focus:text-p-ice-blue">Exercises</HashLink>
        <HashLink to="/#about" className="hover:text-p-ice-blue focus:text-p-ice-blue">About</HashLink>
      </div>
      {isOpen && <Drawer onDone={handleDone}/>}
      <div>
        <button type="button" aria-label="navigation-menu-open" onClick={handleShowDrawer}>
          <img src={hamburgerIcon} alt="Freepik menu icon - Flaticon" />
        </button>
      </div>
    </header>
  )
}