import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import HowAppWork from "./HowAppWork";

function Home() {
  return (
    <div className="bg-[##FAFAFA]">
      <Hero />
      <HowAppWork />
    </div>
  );
}

export default Home;
