import { useState } from 'react';

import AboutTab from './AboutTab';

export default function About() {
  const [selectedTab, setSelectedTab] = useState('edu');

  function handleSelectedTab(userSelectedTab) {
    setSelectedTab(userSelectedTab);
  }

  return (
    <section className="flex flex-col font-bold p-8">
      <h2 className="text-3xl self-center py-6" id='about'>About</h2>
      <div className="flex flex-col self-center max-w-full">
        <menu className="flex justify-between gap-2">
          <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
            <button
              type='button'
              onClick={() => handleSelectedTab('edu')}
              className={selectedTab === 'edu' ? 'activeTab' : undefined}
            >
              Education
            </button>
          </li>
          <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
            <button
              type='button'
              onClick={() => handleSelectedTab('work')}
              className={selectedTab === 'work' ? 'activeTab' : undefined}
            >
              Work
            </button>
          </li>
          <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
            <button
              type='button'
              onClick={() => handleSelectedTab('learning')}
              className={selectedTab === 'learning' ? 'activeTab' : undefined}
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