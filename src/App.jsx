import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CaseStudyContextProvider } from './store/CaseStudyContext';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import CaseStudy from './pages/CaseStudy';
import ErrorPage from './pages/ErrorPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/:caseStudy', element: <CaseStudy /> },
    ]
  }
])

function App() {
  return (
    <CaseStudyContextProvider>
      <RouterProvider router={router} />
    </CaseStudyContextProvider>
  )
}

export default App;