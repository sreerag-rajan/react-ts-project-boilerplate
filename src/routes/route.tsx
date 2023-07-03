import { Home } from "@pages/Home"
import { PageNotFound } from "@pages/PageNotFound"

interface IRouteObject {
  path: string
  element: React.ReactNode
  isPrivate: boolean
  authorizedTo ?: string[]
  layout ?: string
}

export const routeList : IRouteObject[] = [
  {
    path: '/',
    element: <Home/>,
    isPrivate: false,
  },
  {
    path: '*',
    element: <PageNotFound/>,
    isPrivate:false
  }

]


