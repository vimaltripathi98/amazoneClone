import Cookies from "universal-cookie";

const cookies = new Cookies();

export const token = () => cookies.get("x-auth-token");

export const isAuthenticated = () => !!token();
