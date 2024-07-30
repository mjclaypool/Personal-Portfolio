import Objectives from "../components/Objectives";
import Outcomes from "../components/Outcomes";
import { foodOrderingApp } from "../content";

export default function FoodOrderingExercise() {
  return (
    <section className="case-study-content">
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
    </section>
  )
}