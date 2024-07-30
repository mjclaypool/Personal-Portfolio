import { useState } from 'react';

import learningImg from '../assets/raleigh-nc.jpeg';
import aboutUXCert from '../assets/about--ux-certificate.png';
import aboutFrontendCert from '../assets/about--frontend-certificate.png';
import aboutUTUXCert from '../assets/about--utux-certificate.png';
import aboutFrontendMentor from '../assets/about--frontend-mentor.png';
import aboutUdemyReact from '../assets/about--udemy-react.png';

import { ABOUT } from '../content.js';
import AboutDetails from './AboutDetails';

// import aboutUXCert from '../assets/google-badge.png';
// import aboutFrontendCert from '../assets/meta-badge.png';

export default function ContLearnTab() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelectedIcon(selectedButton) {
    setSelectedTopic(selectedButton);
    if (window.innerWidth < 1220) {
      document.getElementById('learning-details').scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  return (
    <div className='tab-content'>
      <div className='tab-summary'>
        <h3 className="tab-title">Professional Development</h3>
        <h4 className='tab-dates'>2023 - present</h4>
        <menu className="tab-details">
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('learnGoogleUX')}
              className={selectedTopic === 'learnGoogleUX' ? 'active' : undefined}
            >
              <img src={aboutUXCert} alt="Freepik icon of a certificate, representing a professional certificate earned from Google."/>
              Google UX Design
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('learnMetaFE')}
              className={selectedTopic === 'learnMetaFE' ? 'active' : undefined}
            >
              <img src={aboutFrontendCert} alt="Freepik icon of a certificate, representing a professional certificate earned from Meta."/>
              Meta Front-End Developer
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('learnUTUX')}
              className={selectedTopic === 'learnUTUX' ? 'active' : undefined}
            >
              <img src={aboutUTUXCert} alt="Freepik icon of a certificate, representing a professional certificate earned from The University of Texas at Austin."/>
              UT Austin UX Design
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('learnFEM')}
              className={selectedTopic === 'learnFEM' ? 'active' : undefined}
            >
              <img src={aboutFrontendMentor} alt="Freepik icon of a multiple-sized screens, representing responsive website design projects from Frontend Mentor."/>
              Frontend Mentor
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedIcon('learnUdemy')}
              className={selectedTopic === 'learnUdemy' ? 'active' : undefined}
            >
              <img src={aboutUdemyReact} alt="Freepik icon of a multiple-sized screens, representing React projects from React: The Complete Guide 2024."/>
              Udemy React
            </button>
          </li>
        </menu>
      </div>
      <div id="learning-details" className="tab-img">
        <img src={learningImg} alt='Image of the sky from within a forest near Raleigh, NC USA.'/>
        <div className='mask-img'></div>
        {selectedTopic && <AboutDetails content={ABOUT[selectedTopic]}/>}
      </div>
    </div>
  )
}