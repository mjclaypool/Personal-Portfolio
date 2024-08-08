import { useState, createContext } from "react";
import { portfolio, countryPicker, littleLemon, foodOrderingApp, placepicker, tictactoe } from "../content.js";

const CaseStudyContext = createContext({
  caseStudy: [],
  projects: [],
  exercises: [],
  showCaseStudy: () => {},
})

export function CaseStudyContextProvider({children}) {
  const [caseStudy, setCaseStudy] = useState([]);

  function showCaseStudy(proj) {
      if (proj == "portfolio") {
        setCaseStudy(portfolio);
      } else if (proj == "country-picker") {
        setCaseStudy(countryPicker);
      } else if (proj == "little-lemon") {
        setCaseStudy(littleLemon);
      } else if (proj == "food-ordering-app") {
        setCaseStudy(foodOrderingApp);
      } else if (proj == "place-picker") {
        setCaseStudy(placepicker);
      } else if (proj == "tic-tac-toe") {
        setCaseStudy(tictactoe);
      } else {
        setCaseStudy("error");
      }
  }

  const caseStudyContext = {
    caseStudy: caseStudy,
    projects: [ portfolio, countryPicker, littleLemon ],
    exercises: [ foodOrderingApp, placepicker, tictactoe ],
    showCaseStudy,
  };

  return <CaseStudyContext.Provider value={caseStudyContext}>{children}</CaseStudyContext.Provider>
}

export default CaseStudyContext;