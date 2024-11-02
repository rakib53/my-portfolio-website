import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProject from "../pages/AddProject";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoutes from "../Protected/routes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/dashboard/add-project",
    element: (
      <ProtectedRoutes>
        <AddProject />
      </ProtectedRoutes>
    ),
  },
]);

export default router;
