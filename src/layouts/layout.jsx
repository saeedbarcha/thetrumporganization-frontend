import React from "react";
import Header from "../components/client/Header";
import Footer from "../components/client/Footer";
import FooterLast from "../components/client/FooterLast";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-column justify-content-between">
      <Header />
      <div className="main-layout-container">

        {children}

        <hr />
        <div>
          <Footer />
        </div>
      </div>
      <FooterLast />
    </div>
  );
};

export default DashboardLayout;
