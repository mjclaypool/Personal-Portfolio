import { useState, createContext } from "react";
import projects from "../data/projectData.json";
import exercises from "../data/exerciseData.json";

const CaseStudyContext = createContext({
  caseStudy: [],
  projects: [],
  exercises: [],
  showCaseStudy: () => {},
})

export function CaseStudyContextProvider({children}) {
  const [caseStudy, setCaseStudy] = useState([]);

  function showCaseStudy(caseStudy) {
    const selectedProj = projects.filter((project) => project.id == caseStudy);
    const selectedExercise = exercises.filter((exercise) => exercise.id == caseStudy);
    if (selectedProj.length > 0) {
      setCaseStudy(selectedProj[0]);
    } else if (selectedExercise.length > 0) {
      setCaseStudy(selectedExercise[0]);
    } else {
      setCaseStudy("error");
    }
  }

  const caseStudyContext = {
    caseStudy: caseStudy,
    projects: projects,
    exercises: exercises,
    showCaseStudy,
  };

  return <CaseStudyContext.Provider value={caseStudyContext}>{children}</CaseStudyContext.Provider>
}

export default CaseStudyContext;