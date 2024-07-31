import Objectives from "../components/Objectives";
import Outcomes from "../components/Outcomes";
import Screenshots from "../components/Screenshots";
import Links from "../components/Links";
import { placepicker } from "../content";

export default function PlacepickerExercise() {
  return (
    <section className="case-study-content">
      <div className="case-study-intro">
        <div>
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
        </div>
        <div className="case-study-mockup-region">
          <img src={placepicker.image} alt-text={placepicker.altText} className="case-study-mockup"/>
        </div>
      </div>
      <Screenshots screenshots={placepicker.screenshots} />
      <Links repoLink={placepicker.repoLink} />
    </section>
  )
}