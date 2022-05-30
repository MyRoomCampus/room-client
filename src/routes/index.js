import React from "react";
import { Navigate } from "react-router";
import DemoPage from "../application/DemoPage";
import Home from "../application/Home";
import HouseList from "../application/HouseList";
import UserInfo from "../application/UserInfo";
import HouseDetails from "../application/HouseList/components/HouseDetails";

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
        path: "/houseDetails/:id",
        element: <HouseDetails />,
      },
      {
        path: "/userinfo",
        element: <UserInfo />,
      },
      {
        path: "/demo",
        element: <DemoPage />,
      },
    ],
  },
];

export default routes;
