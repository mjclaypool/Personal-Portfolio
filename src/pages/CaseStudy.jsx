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
        <section className="case-study-content">
          <div className="case-study-intro">
            <div>
              <h1>{caseStudyCtx.caseStudy.caseStudyTitle}</h1>
              <p className="case-study-tagline">
                {caseStudyCtx.caseStudy.tagLine}
              </p>
              <Objectives
                objective={caseStudyCtx.caseStudy.objective}
                requirements={caseStudyCtx.caseStudy.requirements}
              />
              {caseStudyCtx.caseStudy.type == "exercise" &&
                <Outcomes
                  outcomes={caseStudyCtx.caseStudy.outcomes}
                  learnings={caseStudyCtx.caseStudy.learnings}
                />
              }
            </div>
            <div className="case-study-mockup-region">
              <img
                src={caseStudyCtx.caseStudy.image}
                alt-text={caseStudyCtx.caseStudy.altText}
                className="case-study-mockup"
              />
            </div>
          </div>
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