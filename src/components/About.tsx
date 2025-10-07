import { useState, useContext } from 'react';
import { motion } from "framer-motion";
import AboutTab from './AboutTab.tsx';
import CaseStudyContext from '../store/CaseStudyContext.tsx';

export default function About() {
  const caseStudyCtx = useContext(CaseStudyContext);
  const [selectedTab, setSelectedTab] = useState('Undergraduate Education');

  function handleSelectedTab(tabName: string) {
    setSelectedTab(tabName);
    caseStudyCtx.resetActiveButton()
    caseStudyCtx.changeActiveTab(tabName)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col font-bold p-8 pb-16 xl:px-24 lg:max-w-[1600px]">
        <h2 className="text-3xl self-center py-6" id='about'>About</h2>
        <div className="flex flex-col self-center max-w-full">
          <menu className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:max-w-[650px] lg:ml-10">
            {caseStudyCtx.aboutTabs.map(tab => (
              <li key={tab.tabName} className="relative text-center items-center py-1 px-2 hover:text-p-ice-blue focus:text-p-ice-blue">
                <button
                  type='button'
                  onClick={() => handleSelectedTab(tab.tabName)}
                  className={`${selectedTab === tab.tabName && 'activeTab'} relative w-full h-full flex items-center justify-center px-1 rounded-t-md`}
                >
                  {tab.tabName}
                </button>
                {selectedTab === tab.tabName &&
                  <motion.div layoutId="tab-indicator" className="absolute top-0 left-0 w-full h-full bg-p-glacier-blue rounded-t-md z-0" />
                }
              </li>
            ))}
          </menu>
          <AboutTab />
        </div>
      </div>
    </div>
  )
}