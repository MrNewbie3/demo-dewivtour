import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
