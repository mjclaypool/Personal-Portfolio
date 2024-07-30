import { useState } from 'react';

import workImg from '../assets/newport-ri.jpg';
import aboutSummary from '../assets/about--work-summary.png';
import aboutAwards from '../assets/about--award.png';
import aboutSkills from '../assets/about--skills.png';

import { ABOUT } from '../content.js';
import AboutDetails from './AboutDetails';

export default function WorkExpTab() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelectedIcon(selectedButton) {
    setSelectedTopic(selectedButton);
    if (window.innerWidth < 1220) {
      document.getElementById('work-details').scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  return (
    <div className='tab-content'>
      <div className='tab-summary'>
        <h3 className="tab-title">Naval Undersea Warfare Center Division Newport</h3>
        <h4 className='tab-dates'>2018 - 2023</h4>
        <menu className="tab-details">
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('workSummary')}
              className={selectedTopic === 'workSummary' ? 'active' : undefined}
            >
              <img src={aboutSummary} alt="Freepik icon of a report page, representing a summary of work experience."/>
              Summary
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('workAwards')}
              className={selectedTopic === 'workAwards' ? 'active' : undefined}
            >
              <img src={aboutAwards} alt="Freepik icon of an award, representing work awards earned."/>
              Awards
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('workSkills')}
              className={selectedTopic === 'workSkills' ? 'active' : undefined}
            >
              <img src={aboutSkills} alt="Freepik icon of a crossed pencil and wrench, representing skills gained."/>
              Transferrable Skills
            </button>
          </li>
        </menu>
      </div>
      <div id="work-details" className="tab-img">
        <img src={workImg} alt='Image from the Cliff Walk in Newport, RI USA.'/>
        <div className='mask-img'></div>
        {selectedTopic && <AboutDetails content={ABOUT[selectedTopic]}/>}
      </div>
    </div>
  )
}