import { useState } from 'react';
import { motion } from "framer-motion";

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
              {selectedTab === 'edu' &&
                <motion.div layoutId="tab-indicator" className="absolute top-0 w-full h-full bg-p-glacier-blue rounded-t-md z-0" />
              }
            </li>
            <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
              <button
                type='button'
                onClick={() => handleSelectedTab('work')}
                className={selectedTab === 'work' ? 'activeTab' : 'inactiveTab'}
              >
                Work
              </button>
              {selectedTab === 'work' &&
                <motion.div layoutId="tab-indicator" className="absolute top-0 w-full h-full bg-p-glacier-blue rounded-t-md z-0" />
              }
            </li>
            <li className="relative flex-1 text-center hover:text-p-ice-blue focus:text-p-ice-blue">
              <button
                type='button'
                onClick={() => handleSelectedTab('learning')}
                className={selectedTab === 'learning' ? 'activeTab' : 'inactiveTab'}
              >
                Learning
              </button>
              {selectedTab === 'learning' &&
                <motion.div layoutId="tab-indicator" className="absolute top-0 w-full h-full bg-p-glacier-blue rounded-t-md z-0" />
              }
            </li>
          </menu>
          <AboutTab tab={selectedTab}/>
        </div>
      </div>
    </div>
  )
}