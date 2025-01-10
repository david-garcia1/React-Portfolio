import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import About  from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElemnt: <Error />,
    children: [
      {
      index: true,
      element: <About />
    },
    {
      path: '/portfolio',
      element: <Portfolio />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/resume',
      element: <Resume />
    }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
