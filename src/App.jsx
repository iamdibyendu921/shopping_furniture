// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./layout/root/Root"
import Home from "./components/Home"
import Shop from "./components/Shop"
import About from "./components/About"
import Service from "./components/Service"
import Blog from "./components/Blog"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import Checkout from "./components/Checkout"
import Thankyou from "./components/Thankyou"
import Login from "./Auth/Login"
import SignUp from "./Auth/Signup"
import Viewdetails from "./components/Viewdetails"
import Message from "./components/Message"
import { Toaster } from "sonner"
import PrivateRouter from "./Utils/PrivateRouter"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/product/details/:id",
          element: <Viewdetails/>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/service",
          element: <Service />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        
        {
          path: "/thankyou",
          element: <Thankyou />
        },
        {
          path: "/message",
          element: <Message />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          element: <PrivateRouter />,
          children: [
            {
              path: "/checkout",
              element: <Checkout />
            },
          ],
        },
      ]
    }
  ])
  

  return (
   <>
   <RouterProvider router={router} />
   <Toaster position="top-right" />
   <Toaster richColors  />
   </>
  )
}

export default App
