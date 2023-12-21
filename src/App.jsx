import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full relative">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
