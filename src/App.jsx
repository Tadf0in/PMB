import './css/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageError from './errors/PageError';

import Root from './components/Root/Root';
import Footer from './components/Root/Footer';
import Navbar from './components/Root/Navbar';

import Home from './components/Home';
import Year from './components/Year';


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
        path: ':year',
        element: <Year />,
      },
    ]
  }
], {
  basename: '/',
})

export default function App() {
  return <RouterProvider router={router} />;
}
