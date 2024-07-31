import Objectives from "../components/Objectives";
import Outcomes from "../components/Outcomes";
import Screenshots from "../components/Screenshots";
import Links from "../components/Links";
import { foodOrderingApp } from "../content";

export default function FoodOrderingExercise() {
  return (
    <section className="case-study-content">
      <div className="case-study-intro">
        <div>
          <h1>Food Ordering App</h1>
          <p className="case-study-tagline">{foodOrderingApp.tagLine}</p>
          <Objectives
            objective={foodOrderingApp.objective}
            requirements={foodOrderingApp.requirements}
          />
          <Outcomes
            outcomes={foodOrderingApp.outcomes}
            learnings={foodOrderingApp.learnings}
          />
        </div>
        <div className="case-study-mockup-region">
          <img src={foodOrderingApp.image} alt-text={foodOrderingApp.altText} className="case-study-mockup"/>
        </div>
      </div>
      <Screenshots screenshots={foodOrderingApp.screenshots} />
      <Links repoLink={foodOrderingApp.repoLink} />
    </section>
  )
}