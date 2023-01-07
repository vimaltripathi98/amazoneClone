import React from "react";
import Header from "../HeaderSection/Header";
import { isAuthenticated } from "../utils";

function DefaultLayout({ children }) {
  return (
    <div>
      {isAuthenticated() && <Header />}
      {children}
    </div>
  );
}

export default DefaultLayout;
