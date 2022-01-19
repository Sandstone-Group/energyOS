import React from "react";
import Hero from "./Hero";

const Team = () => {
  return (
    <>
      <Hero text="Development Team" />
      <div className="App-header">
        <p>
          <img className="card-img-top" src="./michael.png" alt="" />
        </p>
        <div className="card-body">
          <h2 className="card-title">Michael Tanner</h2>
          <p className="card-text">Project Lead</p>
          <a
            href="https://www.linkedin.com/in/michaeltannersandstone/"
            className="btn"
          >
            See Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default Team;
