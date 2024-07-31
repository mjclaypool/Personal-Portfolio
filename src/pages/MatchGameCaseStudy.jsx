import Objectives from "../components/Objectives";
import Process from "../components/Process";
import { countryPicker } from "../content";

export default function MatchGameCaseStudy() {
  return (
    <section className="case-study-content">
      <h1>Match Game Case Study</h1>
      <p>{countryPicker.tagLine}</p>
      <Objectives
        objective={countryPicker.objective}
        requirements={countryPicker.requirements}
      />
      <Process
        learnings={countryPicker.learnings}
      />
    </section>
  )
}