import { Navigate } from "react-router-dom";

import Avatar from "pages/Avatar/Avatar";
import Login from "pages/Login/Login";

export const authRoutes = [
  {
    path: "/",
    component: <Navigate to="/login" />,
    title: "Redirect",
  },
  {
    path: "/login",
    component: <Login />,
    title: "Login",
  },
];

export const protectedRoutes = [
  {
    path: "/avatar",
    component: <Avatar />,
    title: "My Avatar",
  },
];
