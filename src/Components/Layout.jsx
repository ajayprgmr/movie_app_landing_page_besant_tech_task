import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar' // Adjust the import path if necessary

const Layout = () => {
  const location = useLocation()

  // Define background images based on route
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/Movies':
        return "url('')"
      case '/TvShows':
        return "url('')"
      case '/Live':
        return "url('')"
      case '/sports':
        return "url('https://s2.dmcdn.net/v/WuB5i1cngaJ4UQ9_B')"
      default:
        return `url(${homepageImage})`
    }
  }

  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
