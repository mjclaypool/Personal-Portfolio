import Objectives from "../components/Objectives";
import Process from "../components/Process";
import { portfolio } from "../content";

export default function PortfolioCaseStudy() {
  return (
    <section className="case-study-content">
      <h1>Portfolio Case Study</h1>
      <p className="case-study-tagline">{portfolio.tagLine}</p>
      <Objectives
        objective={portfolio.objective}
        requirements={portfolio.requirements}
      />
      <Process
        process={portfolio.process}
        learnings={portfolio.learnings}
      />
    </section>
  )
}