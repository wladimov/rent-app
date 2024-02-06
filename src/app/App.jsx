import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Navbar from '../components/Navbar.jsx'

import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/login', element: <Login />},
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
