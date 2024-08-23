import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import navLinks from './Components/componentsExport.js'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
const [Home, Live, Movies, Sports, TvShows, Layout] = navLinks
const routs = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Live',
        element: <Live />,
      },
      {
        path: 'Movies',
        element: <Movies />,
      },
      {
        path: 'Sports',
        element: <Sports />,
      },
      {
        path: 'TvShows',
        element: <TvShows />,
      },
      {
        path: '*',
        element: <Navigate to='/Home' />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routs}>
    <App />
  </RouterProvider>
)
