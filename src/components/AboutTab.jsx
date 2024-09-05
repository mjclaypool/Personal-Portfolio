import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ABOUTTAB } from "../content";

import AboutDetails from "./AboutDetails";

export default function AboutTab( {tab} ) {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelectedIcon(selection) {
    setSelectedTopic(selection);
    if (window.innerWidth < 1220) {
      document.getElementById('about-details').scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  useMemo(() => {
    setSelectedTopic('');
  }, [tab])

  return (
    <div className='flex flex-col lg:flex-row justify-between bg-n-very-dark-blue border-t-[3px] border-t-p-glacier-blue rounded-b-md lg:rounded-t-md'>
      <div className='relative flex flex-col p-8 lg:flex-2 lg:h-[622px] lg:px-12'>
        <h3 className='text-2xl mt-4 mb-2'>{ABOUTTAB[tab].title}</h3>
        <h4 className='text-xl'>{ABOUTTAB[tab].dates}</h4>
        <menu className="flex flex-wrap justify-center gap-2 lg:gap-x-4 max-w-full mt-8 mb-4">
          {ABOUTTAB[tab].buttons.map(topic => (
            <li key={topic.id} id={topic.id}>
              <motion.button
                whileHover={{scale: 1.1}}
                whileFocus={{scale: 1.1}}
                animate={{ backgroundColor: selectedTopic == topic.id ? "rgba(24, 127, 179, 1)" : "rgba(0, 0, 0, 0)" }}
                transition={{ duration: 0.1 }}
                onClick={() => handleSelectedIcon(topic.id)}
                className="flex flex-col justify-center items-center gap-2 rounded-md w-[112px] xl:w-[130px] h-[136px] leading-tight hover:bg-[radial-gradient(rgba(24,127,179,0.9)_0%,_rgba(24,127,179,0)_60%)] focus:bg-[radial-gradient(rgba(24,127,179,0.9)_0%,_rgba(24,127,179,0)_60%)]"
              >
                <img src={topic.icon} alt={topic.altText} className="w-[55%]"/>
                {topic.caption}
              </motion.button>
            </li>
          ))}
        </menu>
        <p className="absolute bottom-0 right-0 font-normal text-xs text-center py-2 px-8 lg:right-auto lg:pl-0">
          Icon Source: <a href="https://www.flaticon.com/authors/freepik" target="_blank" className="hover:text-p-ice-blue focus:text-p-ice-blue">Freepik</a>
        </p>
      </div>
      <div id="about-details" className='relative flex lg:flex-3 justify-center items-center h-[622px] overflow-hidden rounded-b-md'>
        <img src={ABOUTTAB[tab].image} alt={ABOUTTAB[tab].imageAlt} className="h-full object-cover"/>
        <div className='absolute w-full h-full bg-gradient-to-b lg:bg-gradient-to-r from-[rgba(1,13,19,1)] from-0% via-[rgba(1,13,19,0.1)] via-90% to-[rgba(1,13,19,0)] to-100%'/>
        {selectedTopic && <AboutDetails content={ABOUTTAB[tab].buttons.find(({ id }) => id == selectedTopic)}/>}
      </div>
    </div>
  )
}