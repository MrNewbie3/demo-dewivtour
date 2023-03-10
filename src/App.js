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
import SignIn from "./pages/SignIn/SignIn";
import Destination from "./pages/Destination/Destination";
import Ticket from "./pages/Ticket/Ticket";
import Vtour from "./pages/Vtour/Vtour";
import Landing from "./pages/Landing/Landing";
import DataPesanan from "./pages/DataPemesanan/Data_Pemesanan";
import DetailPesan from "./pages/DetailPemesanan/Detail_Pesan";

const App = () => {
  return (
    <div className="font-poppins">
      <Toaster />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/auth/signin" element={<SignIn />}></Route>
        <Route exact path="/ticket" element={<Ticket />}></Route>
        <Route exact path="/vtour" element={<Vtour />}></Route>
        <Route exact path="/destination" element={<Destination />}></Route>
        <Route path="/destination/:target" element={<Landing />}></Route>
        <Route path="/destination/:target/data_pesan" element={<DataPesanan />}></Route>
        <Route path="/destination/:target/data_pesan/detail" element={<DetailPesan />}></Route>
      </Routes>
    </div>
  );
};

export default App;
