import React from "react";
import { useState } from "react";
import "./Contact.css";
import Hero from "./Hero";

const Contact = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const commentChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, comment: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
  };

  return (
    <>
      <Hero text="Contact the team here:" />
      <div className="App-header">
        <form onSubmit={submitHandler}>
          <div className="App-header">
            <div className="new-expense__control">
              <label>Name</label>
              <input
                type="text"
                value={userInput.name}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Email</label>
              <input
                value={userInput.email}
                onChange={amountChangeHandler}
                type="text"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                value={userInput.date}
                onChange={dateChangeHandler}
                type="date"
                min="2019-01-01"
                max="2023-12-31"
              />
            </div>
            <div className="new-expense__control">
              <label>Comment:</label>
            </div>
            <div className="mb-3">
              <textarea
                value={userInput.comment}
                onChange={commentChangeHandler}
                className="form-control"
                rows="5"
                id="comment"
              ></textarea>
            </div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
