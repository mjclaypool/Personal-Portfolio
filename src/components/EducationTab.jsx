import { useState } from 'react';

import eduImg from '../assets/ut-austin-tx.jpeg';
import aboutEdu from '../assets/about--education.png';
import aboutResearch from '../assets/about--research.png';
import aboutAwards from '../assets/about--award.png';
import aboutLeadership from '../assets/about--leader.png';
import aboutInternship from '../assets/about--work.png';

import { ABOUT } from '../content.js';
import AboutDetails from './AboutDetails';

export default function EducationTab() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelectedIcon(selectedButton) {
    setSelectedTopic(selectedButton);
    if (window.innerWidth < 1220) {
      document.getElementById('edu-details').scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  return (
    <div className='tab-content'>
      <div className='tab-summary'>
        <h3 className="tab-title">The University of Texas at Austin</h3>
        <h4 className='tab-dates'>2014 - 2018</h4>
        <menu className="tab-details">
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('eduDegree')}
              className={selectedTopic === 'eduDegree' ? 'active' : undefined}
            >
              <img src={aboutEdu} alt="Freepik icon of a graduation cap, representing a degree earned."/>
              B.S. Mechanical Engineering
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('eduResearch')}
              className={selectedTopic === 'eduResearch' ? 'active' : undefined}
            >
              <img src={aboutResearch} alt="Freepik icon of a magnifying glass, representing research projects completed."/>
              4 Research Projects
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('eduAwards')}
              className={selectedTopic === 'eduAwards' ? 'active' : undefined}
            >
              <img src={aboutAwards} alt="Freepik icon of an award, representing academic awards earned."/>
              4 Academic Awards
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('eduLeadership')}
              className={selectedTopic === 'eduLeadership' ? 'active' : undefined}
            >
              <img src={aboutLeadership} alt="Freepik icon of a leader, representing leadership roles undertaken."/>
              2 Leadership Roles
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('eduInternship')}
              className={selectedTopic === 'eduInternship' ? 'active' : undefined}
            >
              <img src={aboutInternship} alt="Freepik icon of a briefcase, representing internships worked."/>
              1 Engineering Internship
            </button>
          </li>
        </menu>
      </div>
      <div id="edu-details" className="tab-img">
        <img src={eduImg} alt='Image of the 360 Bridge in Austin, TX USA.'/>
        <div className='mask-img'></div>
        {selectedTopic && <AboutDetails content={ABOUT[selectedTopic]}/>}
      </div>
    </div>
  )
}