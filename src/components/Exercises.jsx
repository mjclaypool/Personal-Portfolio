import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CaseStudyContext from '../store/CaseStudyContext.jsx';

export default function Exercises() {
  const caseStudyCtx = useContext(CaseStudyContext);

  return (
    <section className='body-section'>
      <h2 className="section-header" id="exercises">Exercises</h2>
      <div className="exercises-section">
        {caseStudyCtx.exercises.map(card => (
          <Link to={card.linkUrl} className="card" key={card.cardTitle}>
            <img
              src={card.cardImg}
              alt={card.cardAlt}
              className="img-card"
            />
            <h4>{card.cardTitle}</h4>
            <p>{card.cardDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}