import Objectives from "../components/Objectives";
import Process from "../components/Process";
import { countryPicker } from "../content";

export default function CountrypickerCaseStudy() {
  return (
    <section className="case-study-content">
      <div className="case-study-intro">
        <div>
          <h1>Country-Picker Case Study</h1>
          <p>{countryPicker.tagLine}</p>
          <Objectives
            objective={countryPicker.objective}
            requirements={countryPicker.requirements}
          />
        </div>
        <div className="case-study-mockup-region">
          <img src={countryPicker.image} alt-text={countryPicker.altText} className="case-study-mockup"/>
        </div>
      </div>
      <Process
        learnings={countryPicker.learnings}
      />
    </section>
  )
}