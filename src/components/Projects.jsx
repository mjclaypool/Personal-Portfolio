import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import CaseStudyContext from '../store/CaseStudyContext.jsx';

export default function Projects() {
  const caseStudyCtx = useContext(CaseStudyContext);

  return (
    <div id='projects' className='flex flex-col px-8 py-16'>
      <h2 className="font-bold text-3xl self-center py-6">Projects</h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center animate-load-images">
        {caseStudyCtx.projects.map(card => (
          <motion.div
            key={card.cardTitle}
            whileHover={{scale: 1.05}}
            whileFocus={{scale: 1.05}}
            transition={{ duration: 0.1 }}
          >
            <Link
              to={card.linkUrl}
              className="flex flex-col w-[80vw] max-w-[400px] min-h-[305px] border-2 border-n-dark-grey bg-n-dark-grey rounded-xl overflow-hidden hover:shadow-card focus:shadow-card"
            >
              <img
                src={card.cardImg}
                alt={card.cardAlt}
                loading="lazy"
                className="h-[165px] object-cover object-top border-2 border-n-dark-grey rounded-xl overflow-hidden"
              />
              <div className="flex flex-col">
                <h4 className="font-bold text-xl p-4">{card.cardTitle}</h4>
                <p className="leading-tight p-4 pt-0">{card.cardDescription}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}