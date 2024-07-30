import { Link } from 'react-router-dom';

import exerciseImg1 from '../assets/exercise--food-ordering-app.png';
import exerciseImg2 from '../assets/exercise--placepicker.png';
import exerciseImg3 from '../assets/exercise--tic-tac-toe.png';

export default function Exercises() {
  return (
    <section className='body-section'>
      <h2 className="section-header" id="exercises">Exercises</h2>
      <div className="exercises-section">
        <Link to="/case-study--food-ordering/" className="card">
          <div className="img-card">
            <img src={exerciseImg1} alt="Food ordering app screenshot" />
          </div>
          <h4>Food Ordering App</h4>
          <p>A food ordering app that populates selected foods, quantities, and prices in a cart for checkout.</p>
        </Link>
        <Link to="/case-study--placepicker/" className="card">
          <div className="img-card">
            <img src={exerciseImg2} alt="Place picking app screenshot" />
          </div>
          <h4>Placepicker App</h4>
          <p>A place-picking app that sorts available places by geolocation and stores selected place cards.</p>
        </Link>
        <Link to="/case-study--tic-tac-toe/" className="card">
          <div className="img-card">
            <img src={exerciseImg3} alt="Tic-Tac-Toe game screenshot" />
          </div>
          <h4>Tic-Tac-Toe Game</h4>
          <p>A standard, two-player tic-tac-toe game.</p>
        </Link>
      </div>
    </section>
  )
}