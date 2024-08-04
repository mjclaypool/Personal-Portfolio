import Objectives from "../components/Objectives";
import Process from "../components/Process";
import Screenshots from "../components/Screenshots";
import Links from "../components/Links";
import { countryPicker } from "../content";

export default function CountrypickerCaseStudy() {
  return (
    <section className="case-study-content">
      <div className="case-study-intro">
        <div>
          <h1>Country-Picker Case Study</h1>
          <p className="case-study-tagline">{countryPicker.tagLine}<a href="https://restcountries.com/" target="_blank">REST Countries API</a>.</p>
          <Objectives
            objective={countryPicker.objective}
            requirements={countryPicker.requirements}
          />
        </div>
        <div className="case-study-mockup-region">
          <img src={countryPicker.image} alt-text={countryPicker.altText} className="case-study-mockup"/>
        </div>
      </div>
      <Process learnings={countryPicker.learnings} />
      <Screenshots screenshots={countryPicker.screenshots} />
      <Links repoLink={countryPicker.repoLink} />
    </section>
  )
}