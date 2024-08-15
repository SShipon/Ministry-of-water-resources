import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../sheared/NotFound/NotFound";
import Home from "../pages/Home";

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
        
       
      ],
    },
  ]);