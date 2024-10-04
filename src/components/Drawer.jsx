import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Modal from "./Modal";
import closeIcon from "../assets/drawer--close.png";

export default function Drawer( {onDone}) {

  function handleCloseDrawer() {
    onDone();
  }

  return (
    <Modal onClose={onDone}>
      <div id="drawer" className="flex flex-col gap-4 font-raleway font-bold text-n-light-grey py-[44px]">
        <button
          type="button"
          aria-label="navigation-menu-close"
          onClick={handleCloseDrawer}
          className="self-end mt-2 mx-8"
        >
          <img src={closeIcon} alt="Freepik close icon - Flaticon" />
        </button>
        <Link to='/' id='header-title' className="text-xl py-2 px-7 hover:text-p-glacier-blue focus:text-p-glacier-blue" onClick={handleCloseDrawer}>Home</Link>
        <div className="border-b-4 border-p-glacier-blue w-full"/>
        <HashLink to="/#projects" className="text-xl py-2 px-7 hover:text-p-glacier-blue focus:text-p-glacier-blue" onClick={handleCloseDrawer}>Projects</HashLink>
        <HashLink to="/#about" className="text-xl py-2 px-7 hover:text-p-glacier-blue focus:text-p-glacier-blue" onClick={handleCloseDrawer}>About</HashLink>
      </div>
    </Modal>
  )
}