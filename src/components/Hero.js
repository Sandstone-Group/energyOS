import React from "react";
import "./Contact.css";

const Hero = ({ text }) => {
  return (
    <header className="bg-black text-white p-4">
      <h1>{text}</h1>
    </header>
  );
};

export default Hero;
