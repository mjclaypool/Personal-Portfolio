import Objectives from "../components/Objectives";
import Process from "../components/Process";
import Screenshots from "../components/Screenshots";
import Links from "../components/Links";
import { portfolio } from "../content";

export default function PortfolioCaseStudy() {
  return (
    <section className="case-study-content">
      <div className="case-study-intro">
        <div>
          <h1>Portfolio Case Study</h1>
          <p className="case-study-tagline">{portfolio.tagLine}</p>
          <Objectives
            objective={portfolio.objective}
            requirements={portfolio.requirements}
          />
        </div>
        <div className="case-study-mockup-region">
          <img src={portfolio.image} alt-text={portfolio.altText} className="case-study-mockup"/>
        </div>
      </div>
      <Process learnings={portfolio.learnings} />
      <Screenshots screenshots={portfolio.screenshots} />
      <Links repoLink={portfolio.repoLink} />
    </section>
  )
}