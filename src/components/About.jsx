import { useState } from 'react';

import AboutTab from './AboutTab';

export default function About() {
  const [selectedTab, setSelectedTab] = useState('edu')

  function handleSelectedTab(userSelectedTab) {
    setSelectedTab(userSelectedTab);
  }

  return (
    <section className='body-section'>
      <h2 className="section-header" id='about'>About</h2>
      <div className="about-section">
        <menu className="about-tabs">
          <li>
            <button
              type='button'
              onClick={() => handleSelectedTab('edu')}
              className={selectedTab === 'edu' ? 'active' : undefined}
            >
              Education
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedTab('work')}
              className={selectedTab === 'work' ? 'active' : undefined}
            >
              Work
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleSelectedTab('learning')}
              className={selectedTab === 'learning' ? 'active' : undefined}
            >
              Learning
            </button>
          </li>
        </menu>
        <AboutTab tab={selectedTab}/>
      </div>
    </section>
  )
}