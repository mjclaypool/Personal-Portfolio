import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CaseStudyContext from '../store/CaseStudyContext.tsx';
import CTAWrapper from '../UI/CTAWrapper.tsx';
import StackIconWrapper from '../UI/StackIconWrapper.tsx';

import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiFlask } from "react-icons/si";

type overviewProps = {
    projIndex: number,
    type: string
}

export default function ProjectOverview( props: overviewProps ) {
    type variants = {
        [key: string]: string
    }
    const posVariants: variants = {
        forward: "justify-start",
        reverse: "justify-end"
    }
    const directionVariants: variants = {
        forward: "md:flex-row",
        reverse: "md:flex-row-reverse"
    }
    const bgVariants: variants = {
        forward: "left-0 lg:rounded-r-xl animate-load-images md:animate-proj-from-left",
        reverse: "right-0 lg:rounded-l-xl animate-load-images md:animate-proj-from-right"
    }

    const caseStudyCtx = useContext(CaseStudyContext);
    const project = caseStudyCtx.projects[props.projIndex]
    const cardImgURL = new URL(`../assets/${project.cardImg}`, import.meta.url).href

    return (
        <div className={`${posVariants[props.type]} relative flex w-full lg:max-h-[400px]`}>
            <div className={`${bgVariants[props.type]} w-full rounded-xl md:rounded-none lg:w-[80%] xl:max-w-[1600px] h-full bg-gradient-to-t from-[rgba(0,0,0,0)] from-0% to-[#2e3a41] to-50% border-y-2 border-cc-grad-dark-grey z-0`}>
                <div className={`${directionVariants[props.type]} flex flex-col justify-end w-full h-full max-w-[600px] md:max-w-[1600px] items-center font-normal text-base gap-6 md:gap-8 xl:gap-20 p-8 xl:px-24 xl:py-12 m-auto`}>
                    <div className="h-[250px] w-[444px] max-w-[90vw]">
                        <img
                            src={cardImgURL}
                            alt={project.cardAlt}
                            loading="lazy"
                            className="w-full h-full object-cover object-top border-2 border-n-dark-grey rounded-xl overflow-hidden shadow-xl z-10 flex items-center justify-center"
                        />
                    </div>
                    <div className="flex flex-col flex-1 gap-6 md:gap-12 z-10 max-w-[600px]">
                        <div className="flex flex-col gap-2 text-center md:text-start">
                            <h3 className="text-2xl font-bold my-2">{project.cardTitle}</h3>
                            <p className="leading-tight">{project.cardDescription}</p>
                        </div>
                        <div className="flex flex-col flex-wrap gap-10 md:gap-6 md:flex-row items-center md:items-start md:items-end md:justify-between">
                            <div className="flex flex-col gap-2 md:gap-1 text-center md:text-start">
                                <h4 className="text-lg font-bold">Stack:</h4>
                                <div className="flex gap-2">
                                    <StackIconWrapper link="https://www.typescriptlang.org/docs/handbook/intro.html"><SiTypescript className="w-full h-full" /></StackIconWrapper>
                                    <StackIconWrapper link="https://react.dev/reference/react"><SiReact className="w-full h-full" /></StackIconWrapper>
                                    <StackIconWrapper link="https://tailwindcss.com/docs/installation/using-vite"><SiTailwindcss className="w-full h-full" /></StackIconWrapper>
                                    <StackIconWrapper link="https://docs.python.org/3/"><SiPython className="w-full h-full" /></StackIconWrapper>
                                    <StackIconWrapper link="https://flask.palletsprojects.com/en/stable/"><SiFlask className="w-full h-full" /></StackIconWrapper>
                                </div>
                            </div>
                            <CTAWrapper><Link to={project.id} className="flex items-center px-8 py-2.5">Learn More</Link></CTAWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}