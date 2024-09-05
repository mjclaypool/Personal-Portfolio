import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Objectives from "../components/Objectives.jsx";
import Outcomes from "../components/Outcomes.jsx";
import Process from "../components/Process.jsx";
import Screenshots from "../components/Screenshots.jsx";
import Links from "../components/Links.jsx";
import CaseStudyContext from "../store/CaseStudyContext.jsx";
import ErrorPage from "./ErrorPage.jsx";

export default function CaseStudy() {
  const params = useParams();
  const caseStudyCtx = useContext(CaseStudyContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    caseStudyCtx.showCaseStudy(params.caseStudy)
    setIsLoading(false)
    document.getElementById('main-header').scrollIntoView();
  }, [params.caseStudy])

  return (
    <>
      {!isLoading && caseStudyCtx.caseStudy !="error" ?
        <section className='relative flex flex-col w-full px-8'>
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-4xl my-10">{caseStudyCtx.caseStudy.caseStudyTitle}</h1>
              <p className="leading-tight mb-10">
                {caseStudyCtx.caseStudy.tagLine}
                {caseStudyCtx.caseStudy.tagLineLink &&
                  <a href={caseStudyCtx.caseStudy.tagLineLink[0]}>
                    {caseStudyCtx.caseStudy.tagLineLink[1]}
                  </a>
                }
              </p>
              <Objectives
                objective={caseStudyCtx.caseStudy.objective}
                requirements={caseStudyCtx.caseStudy.requirements}
              />
            </div>
            <div className="flex justify-center py-12">
              <img
                src={caseStudyCtx.caseStudy.image}
                alt-text={caseStudyCtx.caseStudy.altText}
                className='w-[320px] h-[320px] object-cover rounded-full border-2 border-n-light-grey'
              />
            </div>
          </div>
          {caseStudyCtx.caseStudy.type == "exercise" &&
            <Outcomes
              outcomes={caseStudyCtx.caseStudy.outcomes}
              learnings={caseStudyCtx.caseStudy.learnings}
              insights={caseStudyCtx.caseStudy.insights}
            />
          }
          {caseStudyCtx.caseStudy.type == "project" &&
            <Process learnings={caseStudyCtx.caseStudy.learnings} />
          }
          <Screenshots screenshots={caseStudyCtx.caseStudy.screenshots} />
          <Links repoLink={caseStudyCtx.caseStudy.repoLink} />
        </section>
      :
      <ErrorPage />
      }
    </>
  )
}