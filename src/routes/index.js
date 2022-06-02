import React from "react";
import { Navigate } from "react-router";
import Home from "../application/Home";
import HouseList from "../application/HouseList";
import UserInfo from "../application/UserInfo";
import Register from "../application/Register";
import Login from "../application/Login";
import ActivityPage from "../application/ActivityPage";
import HouseDetails from "../application/HouseDetails"
const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/houselist" />,
      },
      {
        path: "/houselist",
        element: <HouseList />,
      },
      {
        path: "/userinfo",
        element: <UserInfo />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/activity/:id",
        element: <ActivityPage />,
      },
      {
        path: "/houseDetails/:id",
        element: <HouseDetails />,
      },
    ],
  },
];

export default routes;
