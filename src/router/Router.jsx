import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Todos from "../pages/Todos";
import NotFound from "../components/erros/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Home /> },
          { path: "todos", element: <Todos /> },
          { path: "/profile", element: <Profile /> },
          { path: "/reset-password", element: <ResetPassword /> },
        ],
      },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
