import { HashLink } from "react-router-hash-link";

export default function Footer( {img} ) {
  return (
    <footer id='main-footer'>
      <HashLink to="/#" id='footer-title'>
        <img src={img} alt='My profile picture' />
        <span>Mallory Claypool</span>
      </HashLink>
      <div id='footer-nav'>
        <h3>Pages:</h3>
        <HashLink to="/#projects" className="nav-elem">Projects</HashLink>
        <HashLink to="/#exercises" className="nav-elem">Exercises</HashLink>
        <HashLink to="/#about" className="nav-elem">About</HashLink>
      </div>
      <div id="footer-connect">
        <h3>Connect:</h3>
        <div id='connect-links'>
          <a href="https://www.linkedin.com/in/mallory-claypool/" target="_blank">LinkedIn</a>
          <a href="https://www.github.com/mjclaypool/" target="_blank">Github</a>
        </div>
      </div>
    </footer>
  )
}