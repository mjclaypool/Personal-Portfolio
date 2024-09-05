import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Drawer from "./Drawer";
import hamburgerIcon from "../assets/header--menu.png";

export default function Header( {img} ) {
  const [isOpen, setIsOpen] = useState(false);
  const hashLink = "hover:text-p-ice-blue focus:text-p-ice-blue";

  function handleShowDrawer() {
    setIsOpen(true);
  }

  function handleDone() {
    setIsOpen(false);
  }

  return (
    <header className="flex justify-center">
      <div id='main-header' className="flex flex-1 gap-8 justify-between items-center font-bold p-8 lg:py-12 lg:px-24 lg:max-w-[1600px]">
        <Link to='/' aria-label="return-to-homepage" className="flex gap-4 items-center">
          <img src={img} alt='Profile Picture' className="w-16 h-16 object-contain border-2 border-n-light-grey rounded-full" />
          <span className="text-xl lg:text-3xl">
            Mallory Claypool
          </span>
        </Link>
        <div className="hidden lg:flex gap-8">
          <HashLink to="/#projects" className={hashLink}>Projects</HashLink>
          <HashLink to="/#exercises" className={hashLink}>Exercises</HashLink>
          <HashLink to="/#about" className={hashLink}>About</HashLink>
        </div>
        <button
          type="button"
          aria-label="Open mobile navigation menu"
          onClick={handleShowDrawer}
          className="lg:hidden"
        >
          <img src={hamburgerIcon} alt="Freepik menu icon by Flaticon" className="h-[18px] object-contain" />
        </button>
        {isOpen && <Drawer onDone={handleDone}/>}
      </div>
    </header>
  )
}