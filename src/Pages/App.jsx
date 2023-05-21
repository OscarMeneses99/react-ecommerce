import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ShoopingCartProvider } from '../Context/Context'
import Home from './Home'
import MyAcoount from './MyAcoount'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders'
import NotFound from './NotFound'
import SignIn from './SignIn'
import Navbar from '../Components/Navbar'
import '../App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAcoount />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/my-orders/last',
      element: <MyOrder />
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ])
  return routes
}

const App = () => {
  return (
    <ShoopingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoopingCartProvider>
  )
}

export default App
