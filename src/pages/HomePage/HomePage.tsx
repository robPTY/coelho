import React from "react";
import "./HomePage.css";
import MainHeader from "components/MainHeader/MainHeader";
import HeroSection from "./components/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainHeader />
      <HeroSection />
    </div>
  );
};

export default HomePage;
