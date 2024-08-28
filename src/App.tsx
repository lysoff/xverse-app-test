import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Details from "./Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/:ordinalId",
    element: <Details />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
