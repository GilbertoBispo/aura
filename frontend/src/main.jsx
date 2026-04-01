import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

//importa o createBrowserRouter e o RouterProvider do react-router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router';

import './index.css';
import App from './App.jsx';
import CriarPost from "./components/CriarPost/CriarPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/criar-post",
    element: <CriarPost></CriarPost>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
