import Objectives from "../components/Objectives";
import Outcomes from "../components/Outcomes";
import { tictactoe } from "../content";

export default function TicTacToeExercise() {
  return (
    <section className="case-study-content">
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
    </section>
  )
}