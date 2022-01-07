import React from "react";
import NavComponent from "../../components/NavComponent";
import Footer from "../../shared/Footer";
import HomeAboutUs from "./HomeAboutUs";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: "1" }}>
        <NavComponent />
        <HomeHeader />
        <HomeAboutUs />
      </div>
      <Footer style={{ positon: "relative", bottom: "0", wdith: "100%" }} />
    </div>
  );
};

export default Home;
