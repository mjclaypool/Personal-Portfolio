import { createHashRouter, RouterProvider } from 'react-router-dom';
import { CaseStudyContextProvider } from './store/CaseStudyContext.tsx';
import RootLayout from './pages/Root.tsx';
import HomePage from './pages/HomePage.tsx';
import CaseStudy from './pages/CaseStudy.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import './index.css'

const router = createHashRouter([
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