import React, { useState } from "react";
import Hero from "./Hero";

const Signin = () => {
  const [userInputSign, setUserInputSign] = useState({
    email: "",
    password: "",
  });

  const emailChangeHandler = (event) => {
    setUserInputSign((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const passwordChangeHandler = (event) => {
    setUserInputSign((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  const SignSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userInputSign);
  };

  return (
    <>
      <Hero text="Sign In Below" />
      <div className="App-header">
        <form onSubmit={SignSubmitHandler} className="form-inline">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={userInputSign.email}
              onChange={emailChangeHandler}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={userInputSign.password}
              onChange={passwordChangeHandler}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
