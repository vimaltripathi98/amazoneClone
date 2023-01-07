import React from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { PrivateRouter, PublicRouter } from "./routes/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {PublicRouter()}
          {PrivateRouter()}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
