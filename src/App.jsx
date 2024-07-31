import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

import './index.css'
import PortfolioCaseStudy from './pages/PortfolioCaseStudy';
import CountrypickerCaseStudy from './pages/CountrypickerCaseStudy';
import LittleLemonCaseStudy from './pages/LittleLemonCaseStudy';
import FoodOrderingExercise from './pages/FoodOrderingExercise';
import PlacepickerExercise from './pages/PlacepickerExercise';
import TicTacToeExercise from './pages/TicTacToeExercise';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/case-study--portfolio/', element: <PortfolioCaseStudy /> },
      { path: '/case-study--countrypicker/', element: <CountrypickerCaseStudy /> },
      { path: '/case-study--little-lemon/', element: <LittleLemonCaseStudy /> },
      { path: '/case-study--food-ordering/', element: <FoodOrderingExercise /> },
      { path: '/case-study--placepicker/', element: <PlacepickerExercise /> },
      { path: '/case-study--tic-tac-toe/', element: <TicTacToeExercise /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;