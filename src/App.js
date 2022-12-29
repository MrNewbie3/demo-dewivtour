import React from "react";
import HomePage from "./pages/HomePages/Home";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="font-poppins">
      <Toaster />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/destination" element={<HomePage />}></Route>
        <Route exact path="/ticket" element={<HomePage />}></Route>
        <Route exact path="/vtour" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
