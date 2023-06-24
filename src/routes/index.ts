import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "@pages/Home";
import { PageNotFound } from "@pages/PageNotFound";


const routes : RouteObject[] = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '*',
    Component: PageNotFound
  }
];

export const router = createBrowserRouter(routes)
