import React, { useState } from "react";

const MoreForms = (props) => {

return (
  <div className="container"></div>
)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

const [firstName, setFirstName] = useState ({

})

const changeHandler - (event) => {
    console.log(e.target)
}
{
  return (
    <form>
      <label> First Name: </label>
        <input
          type="Text"
          name={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /> {
          firstName.firstName.length < 3?
          <p>Must be 2 or more characters</p>:
          null

        }
     
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

export default MoreForms;
