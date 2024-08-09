import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CaseStudyContextProvider } from './store/CaseStudyContext';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import CaseStudy from './pages/CaseStudy';
import ErrorPage from './pages/ErrorPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/Personal-Portfolio/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/Personal-Portfolio/', element: <HomePage /> },
      { path: '/Personal-Portfolio/:caseStudy', element: <CaseStudy /> },
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