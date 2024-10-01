import { Navigate } from "react-router-dom";

import Avatar from "pages/Avatar";
import Login from "pages/Login";

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
