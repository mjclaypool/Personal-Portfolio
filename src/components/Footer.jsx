import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function Footer( {img} ) {
  return (
    <footer id='main-footer'>
      <HashLink to="/Personal-Portfolio/#" id='footer-title' aria-label="return-to-homepage">
        <img src={img} alt='My profile picture' />
        <span>Mallory Claypool</span>
      </HashLink>
      <div id='footer-nav'>
        <h3>Pages:</h3>
        <HashLink to="/Personal-Portfolio/#projects" className="nav-elem">Projects</HashLink>
        <HashLink to="/Personal-Portfolio/#exercises" className="nav-elem">Exercises</HashLink>
        <HashLink to="/Personal-Portfolio/#about" className="nav-elem">About</HashLink>
      </div>
      <div id="footer-connect">
        <h3>Connect:</h3>
        <div id='connect-links'>
          <motion.a
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
            transition={{type: 'spring', stiffness: 300}}
            href="https://www.linkedin.com/in/mallory-claypool/"
            target="_blank">
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
            transition={{type: 'spring', stiffness: 300}}
            href="https://www.github.com/mjclaypool/"
            target="_blank">
            Github
          </motion.a>
        </div>
      </div>
    </footer>
  )
}