import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CaseStudyContext from '../store/CaseStudyContext.jsx';

export default function Projects() {
  const caseStudyCtx = useContext(CaseStudyContext);

  return (
    <div id='projects' className='flex flex-col p-8'>
      <h2 className="font-bold text-3xl self-center py-6">Projects</h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center animate-load-images">
        {caseStudyCtx.projects.map(card => (
          <Link
            to={card.linkUrl}
            key={card.cardTitle}
            className="flex flex-col w-[80vw] max-w-[400px] h-[300px] border-2 border-n-dark-grey bg-n-dark-grey rounded-xl overflow-hidden hover:shadow-card focus:shadow-card"
          >
            <img
              src={card.cardImg}
              alt={card.cardAlt}
              loading="lazy"
              className="h-[165px] object-cover object-top border-2 border-n-dark-grey rounded-xl overflow-hidden"
            />
            <h4 className="font-bold text-xl p-4">{card.cardTitle}</h4>
            <p className="leading-tight p-4 pt-0">{card.cardDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}