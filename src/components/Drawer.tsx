import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Modal from "./Modal.tsx";
import closeIcon from "../assets/drawer--close.png";

type drawerProps = {
  onDone: () => void
}

export default function Drawer( props : drawerProps) {
  const linkStyle = "text-xl py-2 px-7 hover:text-p-ice-blue focus:text-p-ice-blue"

  function handleCloseDrawer() {
    props.onDone();
  }

  return (
    <Modal onClose={props.onDone}>
      <div id="drawer" className="flex flex-col gap-4 font-raleway font-bold text-n-light-grey py-[44px]">
        <button
          type="button"
          aria-label="navigation-menu-close"
          onClick={handleCloseDrawer}
          className="self-end mt-2 mx-8"
        >
          <img src={closeIcon} alt="Freepik close icon - Flaticon" />
        </button>
        <Link to='/' id='header-title' className={linkStyle} onClick={handleCloseDrawer}>Home</Link>
        <div className="border-b-4 border-p-glacier-blue w-full"/>
        <HashLink to="/#projects" className={linkStyle} onClick={handleCloseDrawer}>Projects</HashLink>
        <HashLink to="/#about" className={linkStyle} onClick={handleCloseDrawer}>About</HashLink>
        <HashLink to="/#interests" className={linkStyle} onClick={handleCloseDrawer}>Interests</HashLink>
      </div>
    </Modal>
  )
}