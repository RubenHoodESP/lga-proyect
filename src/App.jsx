import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Contact, CV, Publications } from './components';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cv",
      element: <CV />,
    },
    {
      path: "/publications",
      element: <Publications />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
