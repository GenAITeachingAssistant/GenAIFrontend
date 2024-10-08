import { Navigate } from "react-router-dom";

import Login from "pages/Login/Login";
import SignUp from "pages/Signup/SignUp";
import Avatar from "pages/Avatar/Avatar";
import Dashboard from "pages/Dashboard/Dashboard";

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
  {
    path: "/signup",
    component: <SignUp />,
    title: "Signup",
  },
];

export const protectedRoutes = [
  {
    path: "/avatar",
    component: <Avatar />,
    title: "My Avatar",
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
    title: "Dashboard",
  },
];
