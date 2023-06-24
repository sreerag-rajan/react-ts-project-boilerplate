import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";


const routes : RouteObject[] = [
  {
    path: '/',
    Component: Home
  }
];

export const router = createBrowserRouter(routes)
