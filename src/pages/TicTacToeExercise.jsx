import Objectives from "../components/Objectives";
import Outcomes from "../components/Outcomes";
import Screenshots from "../components/Screenshots";
import Links from "../components/Links";
import { tictactoe } from "../content";

export default function TicTacToeExercise() {
  return (
    <section className="case-study-content">
      <div className="case-study-intro">
        <div>
          <h1>Tic-Tac-Toe Exercise</h1>
          <p className="case-study-tagline">{tictactoe.tagLine}</p>
          <Objectives
            objective={tictactoe.objective}
            requirements={tictactoe.requirements}
          />
          <Outcomes
            outcomes={tictactoe.outcomes}
            learnings={tictactoe.learnings}
          />
        </div>
        <div className="case-study-mockup-region">
          <img src={tictactoe.image} alt-text={tictactoe.altText} className="case-study-mockup"/>
        </div>
      </div>
      <Screenshots screenshots={tictactoe.screenshots} />
      <Links repoLink={tictactoe.repoLink} />
    </section>
  )
}