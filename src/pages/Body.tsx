import React from 'react'
import Login from './Login'
import Header from '../components/Header'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

const Body = () => {
    return (
        <div className='relative'>
              <RouterProvider router={router} />
            <img
                src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            />
            <Header />
        </div>
    )
}

export default Body