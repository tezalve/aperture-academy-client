import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoutes";
import Mclasses from "../pages/Dashboard/Mclasses/Mclasses";
import Musers from "../pages/Dashboard/Musers/Musers";
import Addclass from "../pages/Dashboard/Addclass/Addclass";
import Myclasses from "../pages/Dashboard/Myclasses/Myclasses";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // Admin Routes
      {
        path: "/dashboard/mclasses",
        element: <AdminRoutes><Mclasses></Mclasses></AdminRoutes>
      },
      {
        path: "/dashboard/musers",
        element: <AdminRoutes><Musers></Musers></AdminRoutes>
      },
      // Insrtuctor Routes
      {
        path: "/dashboard/addclass",
        element: <InstructorRoutes><Addclass></Addclass></InstructorRoutes>
      },
      {
        path: "/dashboard/myclasses",
        element: <InstructorRoutes><Myclasses></Myclasses></InstructorRoutes>
      },
    ]
  }
]);

export default router;