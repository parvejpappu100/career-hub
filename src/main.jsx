import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/LayOut/Main';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("/jobs.json")
      },
      {
        path: 'details/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json")
      },
      {
        path: "jobs/:id",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json")
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blogs',
        element: <Blog></Blog>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
