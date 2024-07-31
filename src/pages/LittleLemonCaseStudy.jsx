import Objectives from "../components/Objectives";
import Process from "../components/Process";
import Screenshots from "../components/Screenshots";
import Links from "../components/Links";
import { littleLemon } from "../content";

export default function LittleLemonCaseStudy() {
  return (
    <section className="case-study-content">
      <div className="case-study-intro">
        <div>
          <h1>Little Lemon Case Study</h1>
          <p className="case-study-tagline">{littleLemon.tagLine}</p>
          <Objectives
            objective={littleLemon.objective}
            requirements={littleLemon.requirements}
          />
        </div>
        <div className="case-study-mockup-region">
          <img src={littleLemon.image} alt-text={littleLemon.altText} className="case-study-mockup"/>
        </div>
      </div>
      <Process learnings={littleLemon.learnings} />
      <Screenshots screenshots={littleLemon.screenshots} />
      <Links repoLink={littleLemon.repoLink} />
    </section>
  )
}