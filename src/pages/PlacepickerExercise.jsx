import Objectives from "../components/Objectives";
import Outcomes from "../components/Outcomes";
import { placepicker } from "../content";

export default function PlacepickerExercise() {
  return (
    <section className="case-study-content">
      <h1>Placepicker Exercise</h1>
      <p className="case-study-tagline">{placepicker.tagLine}</p>
      <Objectives
        objective={placepicker.objective}
        requirements={placepicker.requirements}
      />
      <Outcomes
        outcomes={placepicker.outcomes}
        learnings={placepicker.learnings}
      />
    </section>
  )
}