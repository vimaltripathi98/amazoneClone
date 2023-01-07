import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { privateRouteList, publicRouteList } from "./RouteList";
import { isAuthenticated } from "../utils/index";

const DefaultLayout = lazy(() => import("../layout/DefaultLayout"));

export const PublicRouter = () => {
  const PublicRoute = ({ children }) => {
    const token = isAuthenticated();
    if (token) {
      return <Navigate to={"/"} replace={true} />;
    }
    return children;
  };
  return publicRouteList.map(({ element: Component, path, exact, name }) => (
    <Route
      path={path}
      exact={exact}
      element={
        <PublicRoute>
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        </PublicRoute>
      }
    />
  ));
};

export const PrivateRouter = (componentData) => {
  const PrivateRoute = ({ children }) => {
    const token = isAuthenticated();
    if (!token) {
      return <Navigate to={"/login"} replace={true} />;
    }
    return children;
  };
  return privateRouteList.map(
    ({ element: Component, path, exact, name, role }) => (
      <Route
        path={path}
        exact={exact}
        element={
          <PrivateRoute>
            <DefaultLayout Component={Component} path={path}>
              <Component componentData={componentData} path={path} />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
    )
  );
};
