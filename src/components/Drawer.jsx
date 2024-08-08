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
      <div id="drawer">
        <button type="button" aria-label="navigation-menu-close" onClick={handleCloseDrawer}>
          <img src={closeIcon} alt="Freepik close icon - Flaticon" />
        </button>
        <Link to='/' id='header-title' className="drawer-elem" onClick={handleCloseDrawer}>Home</Link>
        <hr/>
        <HashLink to="/#projects" className="drawer-elem" onClick={handleCloseDrawer}>Projects</HashLink>
        <HashLink to="/#exercises" className="drawer-elem" onClick={handleCloseDrawer}>Exercises</HashLink>
        <HashLink to="/#about" className="drawer-elem" onClick={handleCloseDrawer}>About</HashLink>
      </div>
    </Modal>
  )
}