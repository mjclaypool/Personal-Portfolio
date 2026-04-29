import { useContext } from 'react';
import { motion } from "framer-motion";
import AboutTab from './AboutTab.tsx';
import CaseStudyContext from '../store/CaseStudyContext.tsx';
import HomeSectionHeading from './HomeSectionHeading.tsx';

export default function About() {
  const caseStudyCtx = useContext(CaseStudyContext);

  function handleSelectedTab(tabName: string) {
    caseStudyCtx.changeActiveTab(tabName)
  }

  return (
    <div id="about" className="flex justify-center">
      <div className="flex flex-col font-bold p-8 pb-16 md:py-16 xl:px-24 lg:max-w-[1600px]">
        <HomeSectionHeading label='About' />
        <div className="flex flex-col self-center max-w-full">
          <menu className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:max-w-[650px] lg:ml-10 border-t-2 lg:border-none border-cc-light-grey rounded-t-xl">
            {caseStudyCtx.aboutTabs.map(tab => (
              <li key={tab.tabName} className="relative text-center items-center hover:text-p-ice-blue focus:text-p-ice-blue">
                <button
                  type='button'
                  onClick={() => handleSelectedTab(tab.tabName)}
                  className={`${caseStudyCtx.activeTab.tabName === tab.tabName && 'activeTab'} relative w-full h-full flex items-center justify-center px-3 py-1 rounded-t-xl`}
                >
                  {tab.tabName}
                </button>
                {caseStudyCtx.activeTab.tabName === tab.tabName &&
                  <motion.div layoutId="tab-indicator" className="absolute top-0 left-0 w-full h-full bg-p-glacier-blue rounded-t-xl z-0" />
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