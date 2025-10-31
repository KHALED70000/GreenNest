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
import Login from './PAGES/AuthenticationPage/Login.jsx';
import Ragostar from './PAGES/AuthenticationPage/Ragostar.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Privetrout from './Provider/Privetrout.jsx';
import Loading from './Loader/Loading.jsx';



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
        hydrateFallbackElement: <Loading></Loading>

      },
      {
        path: '/plants',
        loader: () => fetch('/Fakedata.json'),
        element: (<Privetrout>
          <Plants></Plants>
        </Privetrout>),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/profile',
        element: <Privetrout>
          <Profile></Profile>
        </Privetrout>
      },
      {
        path: "/viewdetail/:plantId",
        loader: async ({ params }) => {
          const data = await fetch('/Fakedata.json').then(res => res.json());
          const app = data.find(item => String(item.plantId) === params.plantId);
          return app;
        },
        element: <Privetrout>
          <Viewdetail></Viewdetail>
        </Privetrout>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/ragistar',
        element: <Ragostar></Ragostar>,
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


    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </StrictMode>
);
