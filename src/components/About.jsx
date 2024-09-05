import { useState } from 'react';

import AboutTab from './AboutTab';

export default function About() {
  const [selectedTab, setSelectedTab] = useState('edu');

  function handleSelectedTab(userSelectedTab) {
    setSelectedTab(userSelectedTab);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col font-bold p-8 lg:px-24 lg:max-w-[1600px]">
        <h2 className="text-3xl self-center py-6" id='about'>About</h2>
        <div className="flex flex-col self-center max-w-full">
          <menu className="flex justify-between gap-2 lg:max-w-[400px] lg:ml-10">
            <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
              <button
                type='button'
                onClick={() => handleSelectedTab('edu')}
                className={selectedTab === 'edu' ? 'activeTab' : 'inactiveTab'}
              >
                Education
              </button>
            </li>
            <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
              <button
                type='button'
                onClick={() => handleSelectedTab('work')}
                className={selectedTab === 'work' ? 'activeTab' : 'inactiveTab'}
              >
                Work
              </button>
            </li>
            <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
              <button
                type='button'
                onClick={() => handleSelectedTab('learning')}
                className={selectedTab === 'learning' ? 'activeTab' : 'inactiveTab'}
              >
                Learning
              </button>
            </li>
          </menu>
          <AboutTab tab={selectedTab}/>
        </div>
      </div>
    </div>
  )
}