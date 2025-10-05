import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Objectives from "../components/Objectives.jsx";
import Outcomes from "../components/Outcomes.jsx";
import Process from "../components/Process.jsx";
import Screenshots from "../components/Screenshots.jsx";
import Links from "../components/Links.jsx";
import CaseStudyContext from "../store/CaseStudyContext.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export default function CaseStudy() {
  const params = useParams();
  const caseStudyCtx = useContext(CaseStudyContext);
  const [isLoading, setIsLoading] = useState(true);
  const [imgLoad, setImgLoad] = useState(false)

  useEffect(() => {
    caseStudyCtx.showCaseStudy(params.caseStudy)
    setIsLoading(false)
    // reset image loaded state when the caseStudy changes
    setImgLoad(false)
    document.getElementById('main-header').scrollIntoView();
  }, [params.caseStudy])

  return (
    <div className="flex justify-center">
      {!isLoading && caseStudyCtx.caseStudy !== "error" &&
        <section className='relative flex flex-col w-full px-8 lg:px-24 lg:max-w-[1600px]'>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-8">
            <div>
              <h1 className="font-bold text-4xl my-10 lg:text-5xl">{caseStudyCtx.caseStudy.caseStudyTitle}</h1>
              <p className="leading-tight mb-6">
                {caseStudyCtx.caseStudy.tagLine}
                {caseStudyCtx.caseStudy.tagLineLink &&
                  <a href={caseStudyCtx.caseStudy.tagLineLink[0]}>{caseStudyCtx.caseStudy.tagLineLink[1]}</a>
                }
              </p>
              <Links repoLink={caseStudyCtx.caseStudy.repoLink} liveLink={caseStudyCtx.caseStudy.liveLink} />
              <Objectives
                objective={caseStudyCtx.caseStudy.objective}
                requirements={caseStudyCtx.caseStudy.requirements}
              />
            </div>
            <div className="flex justify-center py-12 lg:py-0 animate-hero-load">
              <div className="relative rounded-full overflow-hidden w-[320px] h-[320px] border-2 border-n-light-grey lg:w-[400px] lg:h-[400px]">
                {!imgLoad && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-p-glacier-blue rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={caseStudyCtx.caseStudy.image}
                  alt={caseStudyCtx.caseStudy.altText}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoad ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImgLoad(true)}
                  onError={() => setImgLoad(true)}
                />
              </div>
            </div>
          </div>
          {caseStudyCtx.caseStudy.outcomes &&
            <Outcomes
              outcomes={caseStudyCtx.caseStudy.outcomes}
              skills={caseStudyCtx.caseStudy.skills}
              insights={caseStudyCtx.caseStudy.insights}
            />
          }
          {caseStudyCtx.caseStudy.learnings && <Process learnings={caseStudyCtx.caseStudy.learnings} />}
          <Screenshots screenshots={caseStudyCtx.caseStudy.screenshots} />
        </section>
      }
      {isLoading && caseStudyCtx.caseStudy !== "error" && <div className="w-[100vw] h-[100vh]"/>}
      {caseStudyCtx.caseStudy =="error" && <ErrorPage />}
    </div>
  )
}