import { useState, createContext } from "react";
import projects from "../data/projectData.json";

const CaseStudyContext = createContext({
  caseStudy: [],
  projects: [],
  showCaseStudy: () => {},
})

export function CaseStudyContextProvider({children}) {
  const [caseStudy, setCaseStudy] = useState([]);

  function showCaseStudy(caseStudy) {
    const selectedProj = projects.filter((project) => project.id == caseStudy);
    if (selectedProj.length > 0) {
      setCaseStudy(selectedProj[0]);
    } else {
      setCaseStudy("error");
    }
  }

  const caseStudyContext = {
    caseStudy: caseStudy,
    projects: projects,
    showCaseStudy,
  };

  return <CaseStudyContext.Provider value={caseStudyContext}>{children}</CaseStudyContext.Provider>
}

export default CaseStudyContext;