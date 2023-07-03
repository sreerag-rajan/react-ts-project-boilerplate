import { Home } from "@pages/Home"
import { PageNotFound } from "@pages/PageNotFound"
import { IROLE, ROLE } from "store/user/constants"

interface IRouteObject {
  path: string
  element: React.ReactNode
  isPrivate: boolean
  authorizedTo ?: IROLE[]
  layout ?: string
}

export const routeList : IRouteObject[] = [
  {
    path: '/',
    element: <Home/>,
    isPrivate: false,
  },
  {
    path: '/admin/settings',
    element: <Home/>,
    isPrivate: true,
    authorizedTo: [ROLE.ADMIN, ROLE.SUPER_ADMIN] as IROLE[]
  },
  {
    path: '*',
    element: <PageNotFound/>,
    isPrivate:false
  }

]


