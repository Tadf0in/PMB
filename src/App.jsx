import './css/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageError from './errors/PageError';

import Root from './components/Root/Root';

import Accueil from './components/Accueil';
import Galerie from './components/Galerie';
import Contact from './components/Contact';
import Agenda from './components/Agenda';
import EcwidStore from './components/Shop/EcwidStore';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [  
      { 
        path: '',
        element: <Accueil />,
      },
      { 
        path: 'contact',
        element: <Contact />,
      },
      { 
        path: 'agenda',
        element: <Agenda />,
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
      },
      {
        path: 'goodies',
        element: <>
          <EcwidStore />
        </>
      }
    ]
  }
], {
  basename: '/',
})

export default function App() {
  return <RouterProvider router={router} />;
}
