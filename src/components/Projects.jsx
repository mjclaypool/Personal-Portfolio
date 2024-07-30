import { Link } from 'react-router-dom';

import projectImg1 from '../assets/project--portfolio.png';
import projectImg2 from '../assets/project--match-game.png';
import projectImg3 from '../assets/project--little-lemon.png';

export default function Projects() {
  return (
    <section className='body-section'>
      <h2 className="section-header" id='projects'>Projects</h2>
      <div className="projects-section">
        <Link to='/case-study--portfolio/' className="card">
          <div className="img-card">
            <img src={projectImg1} alt="Personal portfolio website screenshot" />
          </div>
          <h4>Portfolio</h4>
          <p>A responsive, interactive portfolio website highlighting personal growth as a designer and software developer.</p>
        </Link>
        <Link to="/case-study--match-game/" className="card">
          <div className="img-card">
            <img src={projectImg2} alt="Matching game screenshot" />
          </div>
          <h4>Match Game</h4>
          <p>A memory matching game that counts the number of clicks made to reveal all of the matching pairs.</p>
        </Link>
        <Link to="case-study--little-lemon/" className="card">
          <div className="img-card">
            <img src={projectImg3} alt="Little Lemon restaurant website screenshot" />
          </div>
          <h4>Little Lemon Restaurant Website</h4>
          <p>A responsive website for a fictional medeterranean restaurant with table-booking functionality.</p>
        </Link>
      </div>
    </section>
  )
}