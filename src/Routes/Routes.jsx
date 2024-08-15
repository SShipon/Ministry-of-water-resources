import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../sheared/NotFound/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
            path: 'about',
            element: <About></About>,
          },
        
          {
            path: 'contact',
            element: <Contact></Contact>,
          },
       
      ],
    },
  ]);