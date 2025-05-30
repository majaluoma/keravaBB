
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/root/Layout';
import ErrorPage from './components/error/ErrorPage';
import { titles } from './data/titles';
import Home from './pages/Home';

import Blog from './pages/Blog';
import Opas from './pages/Opas';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout titles={titles}></Layout>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/uutiset',
          element: <Blog />,
        },
        {
          path: '/opas',
          element: <Opas />,
        },
        {
          path: '/blog/:year',
          element: <Blog batch/>,
        },
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/blog/:year/:id',
          element: <Blog single/>,
        },
        
      ],
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
