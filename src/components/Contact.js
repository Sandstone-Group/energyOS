import React from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    date: "",
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

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense">
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
      </div>
      <div className="new-expense button">
        <button type="submit">Email the team lead</button>
      </div>
    </form>
  );
};

export default Contact;
