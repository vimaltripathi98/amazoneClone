import { lazy } from "react";
import Checkout from "../CheckOut/Checkout";
import Electronics from "../Products/Electronics";
import Jewelery from "../Products/Jewelery";
import ManCloth from "../Products/ManCloth";
import WomenCloth from "../Products/WomenCloth";

const Login = lazy(() => import("../LoginSection/Login"));
const Home = lazy(() => import("../HomeSection/Home"));

export const publicRouteList = [
  { path: "/login", exact: true, name: "Login", element: Login },
];

export const privateRouteList = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/checkout", exact: true, name: "Checkout", element: Checkout },
  { path: "/jewelery", exact: true, name: "Jewelery", element: Jewelery },
  {
    path: "/electronic",
    exact: true,
    name: "electronic",
    element: Electronics,
  },
  { path: "/manCloth", exact: true, name: "ManCloth", element: ManCloth },
  { path: "/womenCloth", exact: true, name: "WomenCloth", element: WomenCloth },
];
