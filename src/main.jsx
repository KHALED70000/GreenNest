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
import Viewdetail from './PAGES/Viewdetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/Fakedata.json'),
        Component: Home,

      },
      {
        path: '/plants',
        loader: () => fetch('/Fakedata.json'),
        Component: Plants,
      },
      {
        path: '/profile',
        Component: Profile
      },
      {
        path: "/viewdetail/:plantId",
        loader: async ({ params }) => {
          const data = await fetch('/Fakedata.json').then(res => res.json());
          const app = data.find(item => String(item.plantId) === params.plantId);
          return app;
        },
        Component: Viewdetail,
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
