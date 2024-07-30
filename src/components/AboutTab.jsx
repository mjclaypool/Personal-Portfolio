import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ABOUTTAB } from "../content";

import AboutDetails from "./AboutDetails";

export default function AboutTab( {tab} ) {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelectedIcon(selection) {
    setSelectedTopic(selection);
    if (window.innerWidth < 1220) {
      document.getElementById('about-details').scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  useMemo(() => {
    setSelectedTopic('');
  }, [tab])

  return (
    <div className='tab-content'>
      <div className='tab-summary'>
        <h3 className="tab-title">{ABOUTTAB[tab].title}</h3>
        <h4 className='tab-dates'>{ABOUTTAB[tab].dates}</h4>
        <menu className="tab-details">
          {ABOUTTAB[tab].buttons.map(topic => (
            <li key={topic.id} id={topic.id}>
              <motion.button
                // type='button'
                whileHover={{scale: 1.1}}
                whileFocus={{scale: 1.1}}
                onClick={() => handleSelectedIcon(topic.id)}
                className={selectedTopic == topic.id ? 'active' : undefined}
              >
                <img src={topic.icon} alt={topic.altText}/>
                {topic.caption}
              </motion.button>
            </li>
          ))}
        </menu>
      </div>
      <div id="about-details" className="tab-img">
        <img src={ABOUTTAB[tab].image} alt={ABOUTTAB[tab].imageAlt}/>
        <div className='mask-img'></div>
        {selectedTopic && <AboutDetails content={ABOUTTAB[tab].buttons.find(({ id }) => id == selectedTopic)}/>}
      </div>
    </div>
  )
}