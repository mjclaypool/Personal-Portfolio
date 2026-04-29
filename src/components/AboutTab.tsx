import { useContext } from "react";
import { motion } from "framer-motion";

import AboutDetails from "./AboutDetails.tsx";
import CaseStudyContext from "../store/CaseStudyContext.tsx";


export default function AboutTab() {
  const caseStudyCtx = useContext(CaseStudyContext);
  const bgURL = new URL(`../assets/${caseStudyCtx.activeTab.image}`, import.meta.url).href

  function handleSelectedIcon(selection: string) {
    caseStudyCtx.changeActiveButton(selection)
    if (window.innerWidth < 1024) {
      document.getElementById('about-details')!.scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  return (
    <div className='flex flex-col lg:flex-row justify-between bg-n-very-dark-blue border-y-[3px] border-p-glacier-blue rounded-b-xl lg:rounded-t-xl'>
      <div className='relative flex flex-col p-8 lg:w-2/5 lg:h-[622px] lg:px-12'>
        <h3 className='text-2xl mt-4 mb-2'>{caseStudyCtx.activeTab.title}</h3>
        <h4 className='text-xl'>{caseStudyCtx.activeTab.dates}</h4>
        <menu className="flex flex-wrap justify-center gap-2 lg:gap-y-1 max-w-full mt-8 mb-4">
          {caseStudyCtx.activeTab.buttons.map(topic => {
            const topicURL = new URL(`../assets/${topic.icon}`, import.meta.url).href
            return (
              <motion.li
                key={topic.id}
                id={topic.id}
                className="relative"
                whileHover={{scale: 1.2}}
                whileFocus={{scale: 1.2}}
                transition={{ duration: 0.1 }}
                onClick={() => handleSelectedIcon(topic.id)}
              >
                <button className="relative flex flex-col justify-center items-center gap-2 w-[136px] h-[136px] leading-tight z-10 hover:bg-[radial-gradient(rgba(24,127,179,0.9)_0%,_rgba(24,127,179,0)_60%)] focus:bg-[radial-gradient(rgba(24,127,179,0.9)_0%,_rgba(24,127,179,0)_60%)]">
                  <img src={topicURL} alt={topic.altText} className="w-[55%]"/>
                  {topic.caption}
                </button>
                {caseStudyCtx.activeButton.id == topic.id && <div className="absolute w-full h-full top-0 rounded-xl bg-p-glacier-blue z-0" />}
              </motion.li>
          )})}
        </menu>
        <p className="absolute bottom-0 right-0 font-normal text-xs text-center py-2 px-8 lg:right-auto lg:pl-0">
          Icon Source: <a href="https://www.flaticon.com/authors/freepik" target="_blank" className="hover:text-p-ice-blue focus:text-p-ice-blue">Freepik</a>
        </p>
      </div>
      <div id="about-details" className='relative flex lg:w-3/5 justify-center items-center h-[622px] overflow-hidden rounded-b-xl'>
        <img src={bgURL} alt={caseStudyCtx.activeTab.imageAlt} className="h-full object-cover rounded-xl"/>
        <div className='absolute w-full h-full bg-gradient-to-b lg:bg-gradient-to-r from-[rgba(1,13,19,1)] from-0% via-[rgba(1,13,19,0.1)] via-90% to-[rgba(1,13,19,0)] to-100%'/>
        {caseStudyCtx.activeButton.id && <AboutDetails />}
      </div>
    </div>
  )
}