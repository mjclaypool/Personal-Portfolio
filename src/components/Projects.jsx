import { Link } from 'react-router-dom';

import projectImg1 from '../assets/project--portfolio.png';
import projectImg2 from '../assets/project--countrypicker.jpg';
import projectImg3 from '../assets/project--little-lemon.png';

export default function Projects() {
  return (
    <section className='body-section'>
      <h2 className="section-header" id='projects'>Projects</h2>
      <div className="projects-section">
        <Link to='/case-study--portfolio/' className="card">
          <img src={projectImg1} alt="Personal portfolio website screenshot" className="img-card" />
          <h4>Portfolio</h4>
          <p>A responsive, interactive portfolio website highlighting personal growth as a designer and software developer.</p>
        </Link>
        <Link to="/case-study--countrypicker/" className="card">
          <img src={projectImg2} alt="Country-Picker web application screenshot" className="img-card" />
          <h4>Country-Picker App</h4>
          <p>A country-picking app that pulls and displays country data from the REST Countries API.</p>
        </Link>
        <Link to="case-study--little-lemon/" className="card">
          <img src={projectImg3} alt="Little Lemon restaurant website screenshot" className="img-card" />
          <h4>Little Lemon Website</h4>
          <p>A responsive website for a fictional medeterranean restaurant with table-booking functionality.</p>
        </Link>
      </div>
    </section>
  )
}