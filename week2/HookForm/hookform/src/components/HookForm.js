import React, { useState } from "react";

const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form>
      <label>
        First Name:
        <input
          type="Text"
          name={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="Text"
          Name={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="Text"
          name={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="Text"
          name={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password
        <input
          type="Text"
          name={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <div>
        <p>Form</p>
        <label>First Name: </label>
        {firstName}
        <label>Last Name: </label>
        {lastName}
        <label> Email: </label>
        {email}
        <label>Password: </label>
        {password}
        <label>Confirm Password: </label>
        {confirmPassword}
      </div>
    </form>
  );
};

export default HookForm;
