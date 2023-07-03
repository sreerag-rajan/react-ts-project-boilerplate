import { Route, Routes } from "react-router-dom";
import { routeList } from "./route";
import { ILayouts } from "@components/Layout/interface";
import { SideNavLayout } from "@components/Layout/SideNavLayout";
import { TopNavLayout } from "@components/Layout/TopNavLayout";
import { DefaultLayout } from "@components/Layout/Default";


export const AllRoutes = () => {
  return(
    <>
      <Routes>
        {
          routeList.map((route) => {
            switch (route.layout) {
              case ILayouts.SIDENAVLAYOUT:                
                return (
                  <SideNavLayout>
                    <Route path={route.path} element={route.element} />
                  </SideNavLayout>
                );
              
              case ILayouts.TOPNAVLAYOUT:                
                return (
                  <TopNavLayout>
                    <Route path={route.path} element={route.element} />
                  </TopNavLayout>
                );

              default:
                return (
                  <DefaultLayout>
                    <Route path={route.path} element={route.element} />
                  </DefaultLayout>
                )
            }
          })
        }
      </Routes>
    </>
  )
}


