import Objectives from "../components/Objectives";
import Process from "../components/Process";
import { littleLemon } from "../content";

export default function LittleLemonCaseStudy() {
  return (
    <section className="case-study-content">
      <h1>Little Lemon Case Study</h1>
      <p className="case-study-tagline">{littleLemon.tagLine}</p>
      <Objectives
        objective={littleLemon.objective}
        requirements={littleLemon.requirements}
      />
      <Process
        process={littleLemon.process}
        learnings={littleLemon.learnings}
      />
    </section>
  )
}