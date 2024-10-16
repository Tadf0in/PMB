import './css/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageError from './errors/PageError';

import Root from './components/Root/Root';
import Footer from './components/Root/Footer';
import Navbar from './components/Root/Navbar';

import Home from './components/Home';
import Galerie from './components/Galerie';
import Infos from './components/Infos';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <><Navbar /><PageError /><Footer /></>,
    children: [  
      { 
        path: '',
        element: <Home />,
      },
      { 
        path: 'infos',
        element: <Infos />,
      },
      {
        path: 'galerie',
        children: [
          {
            path: '',
            element: <Galerie />,
          },
          {
            path: ':year',
            element: <Galerie />,
          }
        ]
      }
    ]
  }
], {
  basename: '/',
})

export default function App() {
  return <RouterProvider router={router} />;
}
