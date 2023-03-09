import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './Routes/error-page';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Attendees from './Routes/Attendees';
import Profile from './Routes/Profile';
import Content from './Routes/Content';
import Guide from './Routes/Guide';
import Exhibitors from './Routes/Exhibitors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/attendees",
        element: <Attendees />,
        errorElement: <ErrorPage />
      },
      {
        path: "/content",
        element: <Content />,
        errorElement: <ErrorPage />
      },
      {
        path: "/guide",
        element: <Guide />,
        errorElement: <ErrorPage />
      },
      {
        path: "/exhibitors",
        element: <Exhibitors />,
        errorElement: <ErrorPage />
      }
      
    ]
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);