import React from "react";

const Hero = ({ text }) => {
  return (
    <header className="bg-black text-white p-4">
      <h1>{text}</h1>
    </header>
  );
};

export default Hero;
