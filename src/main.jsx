import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root.jsx';
import Home from './PAGES/Home.jsx';
import Plants from './PAGES/Plants.jsx';
import Profile from './PAGES/Profile.jsx';
import Error from './PAGES/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/Fakedata.json'),
        Component: Home,
        
      },
      {
        path: '/plants',
        Component: Plants,
      },
      {
        path: '/profile',
        Component: Profile
      },
      {
        path: '*',
        Component: Error, 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
