import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Foods from './pages/Foods';
import Contact from './pages/Contact';

import './index.css';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import QuoteParent from './ParentComponent/quoteParent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ⬅️ this wraps Navbar/Footer + <Outlet />
    children: [
      { index: true, element: <Home /> },
      { path: "quote", element: <QuoteParent /> },
      { path: "restaurants", element: <Restaurants /> },
      { path: "foods", element: <Foods /> },
      { path: "contact", element: <Contact /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
