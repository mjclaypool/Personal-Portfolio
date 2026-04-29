import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import CaseStudyHero from "../components/CaseStudyHero.tsx";
import Objectives from "../components/Objectives.tsx";
import Process from "../components/Process.tsx";
import Screenshots from "../components/Screenshots.tsx";
import Links from "../components/Links.tsx";
import CaseStudyContext from "../store/CaseStudyContext.tsx";
import ErrorPage from "./ErrorPage.js";

export default function CaseStudy() {
  const params = useParams();
  const caseStudyCtx = useContext(CaseStudyContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.caseStudy) {
      caseStudyCtx.showCaseStudy(params.caseStudy);
    }
    setIsLoading(false)
    document.getElementById('main-header')!.scrollIntoView();
  }, [params.caseStudy])

  return (
    <div className="flex justify-center">
      {!isLoading && caseStudyCtx.caseStudy.id !== "error" &&
        <section className='relative flex flex-col w-full px-8 lg:px-24 lg:max-w-[1600px]'>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-8">
            <div>
              <h1 className="font-bold text-4xl my-10 lg:text-5xl">{caseStudyCtx.caseStudy.caseStudyTitle}</h1>
              <p className="leading-tight mb-6">{caseStudyCtx.caseStudy.tagLine}</p>
              <Links repoLink={caseStudyCtx.caseStudy.repoLink} liveLink={caseStudyCtx.caseStudy.liveLink} />
              <Objectives
                objective={caseStudyCtx.caseStudy.objective}
                requirements={caseStudyCtx.caseStudy.requirements}
              />
            </div>
            <CaseStudyHero imgSrc={caseStudyCtx.caseStudy.image} altText={caseStudyCtx.caseStudy.altText} />
          </div>
          <Process learnings={caseStudyCtx.caseStudy.learnings} />
          <Screenshots screenshots={caseStudyCtx.caseStudy.screenshots} />
        </section>
      }
      {isLoading && caseStudyCtx.caseStudy.id !== "error" && <div className="w-[100vw] h-[100vh]"/>}
      {caseStudyCtx.caseStudy.id =="error" && <ErrorPage />}
    </div>
  )
}